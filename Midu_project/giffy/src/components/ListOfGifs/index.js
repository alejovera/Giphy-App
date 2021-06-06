import React from 'react';
import Gif from '../Gif';
import './ListOfGifs.css';

function ListOfGifs({gifs}) {

    return (
        <div className="ListOfGifs">
            {gifs.map(singleGif => 
                <Gif 
                key={singleGif.id}
                title={singleGif.title}
                url={singleGif.url}
                id={singleGif.id}
                />
            )}
        </div>
    )
    
}

export default ListOfGifs
