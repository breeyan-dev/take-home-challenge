import React from "react";
import {
    SORT_NONE,
    SORT_RATING,
    SORT_RELEASED_DATE,
    SORT_TITLE
} from "../../utils/Constants";

const SortBar = (props) => {
    const [sortCategory, setSortCategory] = React.useState(SORT_NONE)
    const [keyword, setKeyword] = React.useState("")

    React.useEffect(() => {
        props.updateMovieList?.(sortCategory, keyword);
    }, [sortCategory, keyword])

    return (
        <React.Fragment>
            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
            <select value={sortCategory} onChange={(e) => setSortCategory(e.target.value)}>
                <option value={SORT_NONE}>None</option>
                <option value={SORT_RATING}>Rating</option>
                <option value={SORT_RELEASED_DATE}>Released Date</option>
                <option value={SORT_TITLE}>Title</option>
            </select>
        </React.Fragment>
    )
}

export default SortBar;