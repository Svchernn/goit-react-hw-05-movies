import { useState, useEffect, useCallback } from 'react';
import { fetchTrendMovies } from '../../shared/services/moviesApi';
import MovieList from 'shared/components/MovieList/MovieList';
import Loader from 'shared/components/Loader/Loader';
import Button from 'shared/components/Button/Button';

import css from './HomePage.module.css';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await fetchTrendMovies(page);

        setItems(prevItems => [...prevItems, ...data.results]);
        setPage(1);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [page, setItems, setLoading, setError]);

  const loadMore = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Trending today</h1>
      {loading && <Loader />}
      {error && <p>Something goes wrong...</p>}
      {Boolean(items.length) && <MovieList items={items} />}
      {Boolean(items.length) && (
        <Button text="Load more" clickHandler={loadMore} />
      )}
    </div>
  );
};

export default HomePage;
