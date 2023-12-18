import { getTrendingMovies } from 'API/API';
import Loader from 'components/loader/Loader';
import { Notify } from 'notiflix';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {movies?.length ? (
        <div>
          <StyledTitle>Trending today</StyledTitle>
          <StyledList>
            {movies.map(movie => (
              <Link
                key={movie.id}
                state={{ from: location }}
                to={{ pathname: `/movies/${movie.id}` }}
              >
                <StyledListItem>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.original_title}
                    height="250"
                  />
                  <h3>{movie.title}</h3>
                  <p> &#9733;{movie.vote_average.toFixed(1)}</p>
                </StyledListItem>
              </Link>
            ))}
          </StyledList>
        </div>
      ) : null}
    </>
  );
};

const StyledTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin: 0;
  padding-bottom: 20px;
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

export default Home;
