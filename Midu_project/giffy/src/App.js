import React from 'react';
import './App.css';
import { Link, Route } from 'wouter';
import ListOfGifs from './components/ListOfGifs';
import Home from './pages/Home/index';
import SearchResults from './pages/SearchResults/index';
import Detail from './pages/Detail/index';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext'; 
import logo from './logo.png'

function App() {

  return (
    <StaticContext.Provider value={{
      name: 'El value desde provider'
    }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className="App-logo" src={logo} />
          </Link>
          <GifsContextProvider>
            
            <Route
              component={Home}
              path="/"
            />
            <Route 
              component={SearchResults}
              path="/search/:keyword"
            />
            <Route path="/gif/:id" component={Detail} />

          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
