import React from 'react';
import Film from './Film.js';

const FilmList = ({films}) => {

    // map the incoming film items as film nodes
    const filmNodes = films.map(film => {
        return (
            <Film url={film.url} key={film.id}>{film.name}</Film>
        );
    });
    console.log(filmNodes)
    return (
        <>
            <ul>
                {filmNodes}
            </ul>
        </>
    );

};

export default FilmList;