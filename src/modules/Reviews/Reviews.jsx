import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetailsReview } from 'shared/services/moviesApi';

import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await fetchMovieDetailsReview(id);
        setReviews(data.results);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchReviews();
  }, [id]);

  const elements = reviews.map(({ id, author, content }) => (
    <li className={css.item} key={id}>
      <h4 className={css.title}>{author}</h4>
      <p className={css.text}>{content}</p>
    </li>
  ));
  return (
    <>
      {Boolean(reviews.length) ? (
        <ul className={css.list}>{elements}</ul>
      ) : (
        <p>No any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
