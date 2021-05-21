import { useState } from 'react'

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

    return (
        <form className="search">
            <select
            onChange={handleLanguageChanges}>
              <option value="en_US">Inglês (Americano)</option>
              <option value="hi">Indu</option>
              <option value="es">Espanhol</option>
              <option value="fr">Francês</option>
              <option value="ja">Japonês</option>
              <option value="ru">Russo</option>
              <option value="en_GB">Inglês (Britânico)</option>
              <option value="de">Alemão</option>
              <option value="it">Italiano</option>
              <option value="ko">Coreano</option>
              <option value="pt-BR">Português Brasileiro</option>
              <option value="ar">Arábico</option>
              <option value="tr">Turco</option>
            </select>
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input onClick={callSearchFunction} type="submit" value="PESQUISA"/>
        </form>
    )
}

export default Search
