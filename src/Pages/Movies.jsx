import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'API/API';
import { Notify } from 'notiflix';
import Loader from 'components/loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const location = useLocation();

  const getMovies = useCallback(async q => {
    try {
      setIsLoading(true);
      const data = await getMovieByQuery(q);
      setMovies(data);
    } catch (error) {
      Notify.failure(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const query = searchParams.get('query');
    getMovies(query);
  }, [getMovies, searchParams, location.pathname]);

  return (
    <>
      {isLoading && <Loader />}
      <StyledTitle>Search movie</StyledTitle>
      <SearchForm />
      {movies?.length ? (
        <StyledList>
          {movies.map(movie => (
            <Link
              key={movie.id}
              state={{ from: location }}
              to={{ pathname: `/movies/${movie.id}` }}
            >
              <StyledListItem>
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.original_title}
                    height="250"
                  />
                ) : (
                  <StyledNoPoster>
                    <h4>No poster</h4>
                  </StyledNoPoster>
                )}
                <h3>{movie.title}</h3>
                <p> &#9733;{movie.vote_average.toFixed(1)}</p>
              </StyledListItem>
            </Link>
          ))}
        </StyledList>
      ) : null}
    </>
  );
};

export default Movies;

const StyledTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledList = styled.ul`
  display: grid;
  grid-row-gap: 20px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 350px;
  margin: 0;
  padding: 0 20px 20px;
  font-weight: 500;
  list-style: none;
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 5px;
  transition: 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28);

  &:hover,
  &:focus {
    color: #0b0d3f;
    background-color: #f0f5ff;
    border-radius: 10px;
  }
  h3 {
    text-align: center;
  }
`;

const StyledNoPoster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 167px;
  height: 250px;
  text-align: center;
  border: 1px solid #f0f5ff;
`;
