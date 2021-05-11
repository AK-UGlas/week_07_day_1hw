import React, {useState} from 'react';
import FilmList from '../components/FilmList';

const FilmBox = () => {

    const [films, setFilms] = useState(
        [
            {
              id: 1,
              name: "Spider-Man: Into the Spider-Verse",
              url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
              id: 2,
              name: "Life Itself",
              url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
              id: 3,
              name: "Mary Queen of Scots",
              url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
              id: 4,
              name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
              id: 5,
              name: "Captain Marvel",
              url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
          ]
    );

    const updateFilms = () => {
        const newFilms = [
            {
                id: 6,
                name: "A Quiet Place Pt. II",
                url: "https://www.imdb.com/title/tt8332922/?ref_=cs_ov_tt"
              },
              {
                id: 7,
                name: "Cruella",
                url: "https://www.imdb.com/title/tt3228774/?ref_=cs_ov_tt"
              },
              {
                id: 8,
                name: "The Dry",
                url: "https://www.imdb.com/title/tt5144174/?ref_=cs_ov_tt"
              },
              {
                id: 9,
                name: "Venom: Let There Be Carnage", 
                url: "https://www.imdb.com/title/tt7097896/?ref_=nv_sr_srsg_0"
              },
              {
                id: 10,
                name: "Eternals",
                url: "https://www.imdb.com/title/tt9032400/?ref_=vp_vi_tt"
              }
        ]
      //  setFilms(films = newFilms);
    }

    return (
        <>
            <FilmList films={films}/>
            <button onClick={() => updateFilms()}>
                View more upcoming releases {'>>'}
            </button>
        </>
    )

};

export default FilmBox;
