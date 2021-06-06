import React, {useState, useEffect} from 'react';
import getGifs from '../services/getGifs';

export function useGifs ({ keyword } = { keyword: null }) {

    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);


    useEffect(() => {
        setLoading(true);
        // Recuperamos la keyword de la local storage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword')


        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                // Guardamos la keyword en la local storage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword])

    return {loading, gifs}
    console.log({loading});
    console.log('Hola');
}