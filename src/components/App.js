import { useEffect, useState } from 'react';
import Header from './Header.js';
import Search from './Search.js';
import Word from './Word.js';
import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b39ddb',
    },
    secondary: {
      main: '#b39ddb',
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <Container>
        <Header text="Dicionário" />
        <Search search={search} />
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
