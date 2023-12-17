import { getMovieCredits } from 'API/API';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  StyledActorInfo,
  StyledItem,
  StyledList,
  StyledNoPhoto,
} from './Cast.styled';
import Loader from 'components/loader/Loader';

const Cast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCastById = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieCredits(id);
        setCast(data);
      } catch (error) {
        Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCastById();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {cast?.length ? (
        <StyledList>
          {cast.map(({ id, profile_path, name, character }) => (
            <StyledItem key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width={100}
                />
              ) : (
                <StyledNoPhoto>
                  <p>No photo</p>
                </StyledNoPhoto>
              )}
              <StyledActorInfo>
                <h4>{name}</h4>
                <p>Character: {character}</p>
              </StyledActorInfo>
            </StyledItem>
          ))}
        </StyledList>
      ) : (
        <h3>We don't have any informations about cast of this movie.</h3>
      )}
    </>
  );
};

export default Cast;
