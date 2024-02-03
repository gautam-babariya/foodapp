import React, { useEffect, useState } from 'react'
import './Search.css'


function Search() {
  // find windows height and width 
  // {windowSize[0]} == width
  // {windowSize[1]} == height
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  const searchwidth = windowSize[0] / 2;

  return (
    <div className="container-fluid paddingforsearch-class">
      <form method='post' action='/' className="d-flex" role="search">
        <input className="form-control me-2" id="searchbar-id" style={{ width: searchwidth }} type="search" placeholder="Are you hungry?" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit" id="searchbutton-id">Search</button>
      </form>
    </div>
  )
}

export default Search
