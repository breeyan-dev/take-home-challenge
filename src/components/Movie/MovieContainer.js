import React from "react";

import "./Style.css"
import useIsMobile from '../hooks/useScreenSize';
import useFetchData from '../hooks/useFetchData';
import Movie from "./Movie";

const CardContainer = (props) => {
    const { response: movieResponse, error: movieError, loading: movieLoading, refetch: movieRefetch } 
        = useFetchData(props.fetchUrl, {
                query: new Object({
                    sort: props.sortCategory,
                    keyword: props.keyword
                })
            }
        );

    const { response: genreResponse, error: genreError, loading: genreLoading } = useFetchData('/genre/movie/list')

    const replaceGenreWithName = (movieList, genreList) => {
        return movieList.map(movie => {
            movie.genres = [];
            movie.genre_ids.forEach(genre_id => {
                const genre = genreList.find(_genre => _genre.id === genre_id)

                movie.genres.push(genre ? genre.name : "?")
            })

            return movie;
        });
    }

    const { isMobile } = useIsMobile()

    React.useEffect(() => {
        movieRefetch()
    }, [props.sortCategory, props.keyword])

    if (movieError || genreError) {
        return <p>Error</p>;
      }
    if (movieLoading || genreLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div className={`card-container ${isMobile ? "mobile" : ""}`}>
            {
                replaceGenreWithName(movieResponse.results, genreResponse.genres).map(movie => 
                    <Movie key={movie.id} detail={movie}/>  
                )
            }
        </div>
    )
}

export default CardContainer;