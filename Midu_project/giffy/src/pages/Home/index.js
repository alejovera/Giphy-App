import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifs from '../../components/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';

const POPULAR_GIFS = [
    'Matrix', 'Venezuela', 'Chile', 'Colombia'
]

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation();

    const { loading, gifs } = useGifs()


    const handleSubmit = e => {
        e.preventDefault();
        // ir a otra ruta
        pushLocation(`/search/${keyword}`)
        console.log(keyword);
    }
    const handleChange = e => {
        setKeyword(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Busca un gif..." onChange={handleChange} type="text" value={keyword} />
                <button>Buscar</button>
            </form>
            <h3>Ultima busqueda</h3>
            <ListOfGifs gifs={gifs} />
            <h3 className="App-title">Los gifs mas populares</h3>            
            <ul>
            {POPULAR_GIFS.map((popularGif) =>(
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`}>
                        Gifs de {popularGif}
                    </Link>
                </li>
            ))}
            </ul>
        </>
    )
}

