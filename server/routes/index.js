import express from 'express';

import test from './test';
import movies from './movies';
import movie from './movie';
import genre from './genre';

let router = express.Router();

router.use('/test', test);
router.use('/movies', movies);
router.use('/movie', movie);
router.use('/genre', genre);

export default router;
