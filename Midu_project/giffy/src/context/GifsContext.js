import React, { useState } from 'react';

const Context = React.createContext({
    name: 'El-static-context'
})

export function GifsContextProvider ({children}) {

    const [gifs, setGifs] = useState([])

    return <Context.Provider value={{gifs, setGifs}} >
        {children}
    </Context.Provider>
}

export default Context;