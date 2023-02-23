import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, name, title }) => (
    <Link
      className={css.link}
      key={id}
      to={`/movies/${id}`}
      state={{ from: location }}
    >
      <li>
        {name} {title}
      </li>
    </Link>
  ));

  return (
    <>
      <ul className={css.list}>{elements}</ul>
    </>
  );
};

export default memo(MovieList);

MovieList.defaultProps = {
  items: [],
};

MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
