import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetailsCast } from 'shared/services/moviesApi';
import { imgUrl } from 'shared/services/moviesApi';

import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await fetchMovieDetailsCast(id);
        setCast(data.cast);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchCast();
  }, [id]);

  const elements = cast.map(({ id, character, name, profile_path }) => (
    <li key={id}>
      <img
        className={css.img}
        src={imgUrl + profile_path}
        alt={name}
        width="100"
      />
      <p className={css.text}>{name}</p>
      <p className={css.subText}>Character: {character}</p>
    </li>
  ));
  return <ul className={css.list}>{elements}</ul>;
};

export default Cast;

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
