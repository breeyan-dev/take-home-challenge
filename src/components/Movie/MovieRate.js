import React from "react";
import ReactStars from "react-rating-stars-component";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

const MovieRate = (props) => {

    const [ rating, setRating ] = React.useState(0)
    const [ isSettingRating, setIsSettingRating ] = React.useState(false)

    const ratingChanged = async (_rating) => {
        setIsSettingRating(true)
        axios.post(`/movie/${props.movieId}/rating`, {
            value: _rating
        })
        .then(res => res.data)
        .then(data => {
            if (data.success) {
                alert('success')
            } else {
                throw data.status_message
            }
        })
        .catch(err => {
            alert(err)
            setRating(rating)
        })
        .finally(() => {
            setIsSettingRating(false)
        })
    }

    return (
        <>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                value={rating}
                size={24}
                edit={!isSettingRating}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
            <ClipLoader
                loading={isSettingRating}
                size={10}
            />
        </>
    )
}

export default MovieRate;