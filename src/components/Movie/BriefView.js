import React from "react";

import useIsMobile from '../hooks/useScreenSize';

const BriefView = (props) => {

    const { isMobile } = useIsMobile()

    return (
        <div className="brief-view">
            { !isMobile &&  <img className="poster" src={props.detail.backdrop_path} alt="No preview"/>}
            
            <div className="content">
                <div className="subsection title">
                    { props.detail.title }
                </div>
                <div className="subsection rating">
                    { props.detail.vote_count }
                </div>
            </div>
        </div>
    )
}

export default BriefView;