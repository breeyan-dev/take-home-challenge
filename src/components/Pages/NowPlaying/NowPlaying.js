import React from 'react';

import PageTitle from '../../_shared/PageTitle/PageTitle';
import CardContainer from '../../Movie/MovieContainer';
import SortBar from '../../SortBar/SortBar';

const NowPlaying = () => {

  const [keyword, setKeyword] = React.useState("")
  const [sortCategory, setSortCategory] = React.useState("");

  const updateMovieList = (_sortCategory, _keywork) => {
    setSortCategory(_sortCategory)
    setKeyword(_keywork)
  }

  return (
    <React.Fragment>
      <PageTitle>Now Playing</PageTitle>
      <SortBar updateMovieList={updateMovieList} />
      <CardContainer 
        sortCategory={sortCategory} 
        keyword={keyword}
        fetchUrl='/movies/nowPlaying'
      />
    </React.Fragment>
  );
};

export default NowPlaying;
