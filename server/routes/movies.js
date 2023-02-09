import express from 'express';

import { getNowPlayingMovies, getTopRatedMovies } from '../services/imdb';
import {
  SORT_NONE,
  SORT_RATING,
  SORT_RELEASED_DATE,
  SORT_TITLE
} from "../../src/utils/Constants";

let router = express.Router();

const sortAndFilterMovies = (movies, sortCategory, keyword) => {
  return movies
    .filter(movie => {
      return movie.title.toLowerCase().includes(keyword.toLowerCase())
    })
    .sort((movie1, movie2) => {
      if (sortCategory === SORT_NONE) {
        return 1;
      } else if (sortCategory === SORT_RATING) {
        return Number(movie1.vote_count) > Number(movie2.vote_count) ? -1 : 1;
      } else if (sortCategory === SORT_RELEASED_DATE) {
        return Date(movie1.release_date) > Date(movie2.release_date) ? -1 : 1;
      } else if (sortCategory === SORT_TITLE) {
        return movie1.title > movie2.title ? 1 : -1;
      }

      return 1;
    })
}

router.get('/nowPlaying', async (req, res) => {
  const sortCategory = req.query.sort
  const keyword = req.query.keyword

  let nowPlaying;
  await getNowPlayingMovies()
    .then((response) => {
      nowPlaying = response
      nowPlaying.results = sortAndFilterMovies(nowPlaying.results, sortCategory, keyword);
    })
    .catch((error) => {
      console.log(error);
      nowPlaying = error;
    });
  return res.json(nowPlaying);
});

router.get('/topRated', async (req, res) => {
  const sortCategory = req.query.sort
  const keyword = req.query.keyword
  
  let topRatedMovies;
  await getTopRatedMovies()
    .then((response) => {
      topRatedMovies = response;
      topRatedMovies.results = sortAndFilterMovies(topRatedMovies.results, sortCategory, keyword);
    })
    .catch((error) => {
      console.log(error);
      topRatedMovies = error;
    });
  return res.json(topRatedMovies);
});

export default router;
