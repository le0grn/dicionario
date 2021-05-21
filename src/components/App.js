import { useEffect, useState } from 'react';
import Header from './Header.js';
import Search from './Search.js';
import Word from './Word.js';
import './App.css';

const DICTIONARY_API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en_US/hello";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(DICTIONARY_API_URL)
    .then(response => response.json())
    .then(
      (result)=> {
        setIsLoaded(true);
        setItems(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
      )
  }, [])

  const search = searchValue => {
    setIsLoaded(false);
    setError(null);

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/${searchValue}`)
    .then(response => response.json())
    .then((result)=> {
      setIsLoaded(true);
      setItems(result);
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    })
  };

  return (
    <div className="App">
      <Header text="Dicionário" />
      <Search search={search} />
      <p className="App-intro">Dicionário com a API dictionary</p>
      <div className="words">
        {!isLoaded && !error ? (
          <span>Carregando...</span>
        ) : error? (
          <div className="errorMessage">{error.message}</div>
        ) : (
          items.map(item => (
            <Word w={item} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
