import { Button, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    margin: {
        margin: theme.spacing(2),
    },
}));

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const [language, setLanguage] = useState("en_US");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const handleLanguageChanges = (e) => {
        setLanguage(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("");
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(language+"/"+searchValue);
        resetInputField();
    }

    const classes = useStyles();

    return (
        <form className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel shrink id="idioma-select-label">
                    Idioma
                </InputLabel>
                <Select
                    labelId="idioma-select-label"
                    id="idioma-select"
                    value={language}
                    onChange={handleLanguageChanges}
                >
                    <MenuItem value="en_US">Inglês (Americano)</MenuItem>
                    <MenuItem value="hi">Hindi</MenuItem>
                    <MenuItem value="es">Espanhol</MenuItem>
                    <MenuItem value="fr">Francês</MenuItem>
                    <MenuItem value="ja">Japonês</MenuItem>
                    <MenuItem value="ru">Russo</MenuItem>
                    <MenuItem value="en_GB">Inglês (Britânico)</MenuItem>
                    <MenuItem value="de">Alemão</MenuItem>
                    <MenuItem value="it">Italiano</MenuItem>
                    <MenuItem value="ko">Coreano</MenuItem>
                    <MenuItem value="pt-BR">Português Brasileiro</MenuItem>
                    <MenuItem value="ar">Árabe</MenuItem>
                    <MenuItem value="tr">Turco</MenuItem>
                </Select>
            </FormControl>
            <TextField
                id="standard-basic"
                label="Digite a palavra"
                value={searchValue}
                onChange={handleSearchInputChanges}
            />
            <Button className={classes.margin} variant="contained" color="primary" onClick={callSearchFunction} type="submit">
                Pesquisar
            </Button>
        </form>
    )
}

export default Search
