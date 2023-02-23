import { useState, useEffect, useCallback } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { fetchMovieDetails } from 'shared/services/moviesApi';
import { imgUrl } from 'shared/services/moviesApi';
import Button from 'shared/components/Button/Button';

import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const getMovie = async () => {
      try {
        const result = await fetchMovieDetails(id);

        setMovie(result);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    getMovie();
  }, [id]);

  const goBack = useCallback(() => navigate(from), [navigate, from]);

  return (
    <>
      {movie && (
        <div className={css.wrap}>
          <button className={css.btn} onClick={goBack}>
            Go back
          </button>
          <h2 className={css.title}>
            {movie.data.title} {movie.data.name}
          </h2>
          <img
            className={css.img}
            src={imgUrl + movie.data.backdrop_path}
            alt={movie.data.title}
            width="400"
          />
          <p className={css.text}>
            User score: {Math.round(movie.data.vote_average * 10)}%
          </p>
          <h3 className={css.subTitle}>Overview</h3>
          <p className={css.text}>{movie.data.overview}</p>
          <h3 className={css.subTitle}>Genres</h3>

          <ul className={css.genreList}>
            {movie.data.genres.map(genre => (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={css.addWrap}>
        <h3 className={css.subTitle}>Additional information</h3>
        <ul className={css.addList}>
          <li>
            <Link className={css.link} to="cast" state={{ from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.link} to="reviews" state={{ from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
