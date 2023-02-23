import { memo } from 'react';
import PropTypes from 'prop-types';
import useForm from 'shared/hooks/useForm';

import css from './MovieSearchForm.module.css';

const MovieSearchForm = ({ initialState, onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm(initialState, onSubmit);
  const { search } = state;

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={search}
          className={css.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          required
        />
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
};

export default memo(MovieSearchForm);

MovieSearchForm.defaultProps = {
  initialState: {
    search: '',
  },
};

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
