import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieSearchForm from './MovieSearchForm/MovieSearchForm';
import MovieList from 'shared/components/MovieList/MovieList';
import Button from 'shared/components/Button/Button';

import { fetchSearchMovie } from 'shared/services/moviesApi';

const MovieSearch = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchMovie = async () => {
      try {
        setLoading(true);
        const data = await fetchSearchMovie(search, page);

        setItems(prevItems => [...prevItems, ...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [search, page, setItems, setLoading, setError]);

  const onSearch = useCallback(
    ({ search }) => {
      setSearchParams({ search, page: 1 });
      setItems([]);
    },
    [setSearchParams]
  );

  const loadMore = useCallback(() => {
    setSearchParams({ search, page: Number(page) + 1 });
  }, [setSearchParams, page, search]);

  return (
    <div>
      <MovieSearchForm onSubmit={onSearch} />
      {loading && <p>...is loading</p>}
      {Boolean(items.length) && <MovieList items={items} />}
      {Boolean(items.length) && <Button onClick={loadMore} text="Load more" />}
      {error && <p>Something goes wrong...</p>}
    </div>
  );
};

export default MovieSearch;
