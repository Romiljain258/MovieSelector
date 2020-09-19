import React, { useState, useEffect } from 'react';
import SearchArea from './SearchArea';
import Display from './Display';
import axios from 'axios';

const Movie = (props) => {
    let [movie, setMovie] = useState([]);
    let [search, setSearch] = useState('');

    const findResult = (e) => {
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=23df51fd2cec4dba03653ae0ba3d0bb3&query=${search}`)
            .then(json => {
                setMovie([...json.data.results])
            })
            .catch(err => err);
    };

    const findingResult = (e) => {
        setSearch(e.target.value);
    };
    return (
        <>
        <h1 className="movie">Movie lookup</h1>
            <SearchArea findResult={findResult} findingResult={findingResult} />
            {movie.length<1?<h1 style={{color:'white'}}>No result found..</h1>:<Display movie={movie}/>}
        </>
    )
}
export default Movie;