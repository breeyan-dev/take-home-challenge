import express, { json } from 'express';

import { getMovieGenres } from '../services/imdb';

let router = express.Router();

router.get('/movie/list', async (req, res) => {
    let movieGenres;

    await getMovieGenres()
        .then((response) => {
            movieGenres = response
        })
        .catch((error) => {
            console.log(error);
            movieGenres = error
        });
        
    return res.json(movieGenres);
});

export default router;