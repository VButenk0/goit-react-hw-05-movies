import { getMovieReviews } from 'API/API';
import Loader from 'components/loader/Loader';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledList, StyledTitle } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCastById = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieReviews(id);
        setReviews(data);
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
      {reviews?.length ? (
        <StyledList>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <StyledTitle>
                <span>Author:</span> {author}
              </StyledTitle>
              <p>{content}</p>
            </li>
          ))}
        </StyledList>
      ) : (
        <h3>We don't have any reviews for this movie.</h3>
      )}
    </>
  );
};

export default Reviews;
