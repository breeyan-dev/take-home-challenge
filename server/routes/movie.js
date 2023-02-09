import express, { json } from 'express';

import { rateMovie } from '../services/imdb';

let router = express.Router();

router.post('/:movie_id/rating', async (req, res) => {
    const movie_id = req.params.movie_id;
    const body = req.body;
    
    const rateMovieResponse = await rateMovie(movie_id, body)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return {
                success:false,
                status_message: 'Internal server error'
            };
        });
    return res.json(rateMovieResponse);
});

export default router;