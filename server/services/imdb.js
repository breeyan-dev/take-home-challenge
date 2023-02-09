import https from 'https';

const imdbHost = 'https://api.themoviedb.org';
const nowPlayingPath = '/3/movie/now_playing';
const topRatedPath = '/3/movie/top_rated';
const movieGenresPath = '/3/genre/movie/list';
const rateMoviePath = (movie_id) => `/3/movie/${movie_id}/rating`;
const apiKey = 'b8359a48e865c6dff15dbc8a38c60bd1'; // Check the email for the API key

const getApiUrl = ({ path, queryParamString }) =>
  `${imdbHost}${path}?api_key=${apiKey}${
    queryParamString ? '&' + queryParamString : ''
  }`;

const makeRequest = (url, body) =>
  new Promise((resolve, reject) => {
    const postData = JSON.stringify(body);
    const options = {
      method: body ? 'post' : 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': body ? postData.length : 0
      }
    }

    const request = https.request(url, options, (response) => {
      response.setEncoding('utf-8');

      var data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        var responseObject = JSON.parse(data);
        resolve(responseObject);
      });
    });
    request.on('error', (error) => {
      reject(error);
    });
    if (body) {
      request.write(postData);
    }

    request.end();
  });

export const getNowPlayingMovies = () =>
  makeRequest(getApiUrl({ path: nowPlayingPath }));
  
export const getTopRatedMovies = () =>
  makeRequest(getApiUrl({ path: topRatedPath }));

export const getMovieGenres = () =>
  makeRequest(getApiUrl({ path: movieGenresPath }));

export const rateMovie = (movie_id, body) => 
  makeRequest(getApiUrl({ path: rateMoviePath(movie_id) }), body);
