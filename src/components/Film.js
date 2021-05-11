import React from 'react';

const Film = ({children, url}) => {

    console.log({children})
    return (
        <>
            <li>
                <a href={url}>{children}</a>
            </li> 
        </>
    );

}

export default Film;