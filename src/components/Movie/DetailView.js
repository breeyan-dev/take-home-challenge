import React from "react";
import MovieRate from "./MovieRate";

const DetailView = (props) => {
    return (
        <div className="detail-view">
            <div className="info-section">
                <img className="poster" src={props.detail.backdrop_path} alt="No preview"/>

                <div className="content">
                    <div className="title">
                        { props.detail.original_title }
                    </div>
                    <div className="rating">
                        { props.detail.vote_count }
                    </div>
                    <div className="genre">
                        { props.detail.genres.join(', ') }
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="subsection">
                    <div className="subtitle">
                        Description
                    </div>
                    <div className="subcontent">
                        { props.detail.overview }
                    </div>
                </div>

                <div className="subsection">
                    <div className="subtitle">
                        Cast
                    </div>
                    <div className="subcontent">
                        { props.detail.popularity }
                    </div>
                </div>

                <div className="subsection">
                    <MovieRate movieId={props.detail.id}/>
                </div>
            </div>
        </div>
    )
}

export default DetailView;