import React from 'react';

const Film = ({name, ref}) => {

    return (
        <>
            <a href={ref}>{name}</a>
        </>
    );

}