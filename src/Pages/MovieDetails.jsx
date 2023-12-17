import { getMovieDetails } from 'API/API';
import {
  StyledAdditionalInfo,
  StyledButton,
  StyledMovieContainer,
  StyledMovieInfo,
} from 'components/MovieDetails/MovieDetails.styled';
import Loader from 'components/loader/Loader';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fromPath, setFromPath] = useState('/');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieById();
  }, [id]);

  useEffect(() => {
    const previousPath = localStorage.getItem('previousPath') || '/';
    setFromPath(previousPath);
  }, []);

  const handleCallBack = () => {
    navigate(fromPath);
  };

  const genres = () => {
    const genresArr = movie.genres.map(genre => genre.name);
    const genresStr = genresArr.join(' ');
    return genresStr;
  };

  return (
    <>
      {isLoading && <Loader />}
      {movie && (
        <div>
          <StyledButton onClick={handleCallBack}>Go Back</StyledButton>
          <StyledMovieContainer>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width="300"
            />
            <StyledMovieInfo>
              <h2>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p>User Score: {movie.vote_average.toFixed(1) * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{genres()}</p>
            </StyledMovieInfo>
          </StyledMovieContainer>

          <h3>Additional information</h3>
          <StyledAdditionalInfo>
            <NavLink to="cast">Cast</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
          </StyledAdditionalInfo>
          <hr />
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
