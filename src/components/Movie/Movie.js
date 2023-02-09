import React from "react";
import BriefView from "./BriefView";
import DetailView from "./DetailView";

const Movie = (props) => {

    const [ showBrief, setShowBrief ] = React.useState(true)

    const onClickCard = () => {
        setShowBrief(!showBrief)
    }

    return (
        <div className="movie-card">
            <button onClick={() => onClickCard()}>...</button>
            { showBrief ? <BriefView detail={props.detail}/> : <DetailView detail={props.detail}/> }
        </div>
    )
}

export default Movie;