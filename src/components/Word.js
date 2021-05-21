const Word = ({w}) => {
    return (
        <div className="word">
            <h2>Palavra: {w.word}</h2>
            <br/>
            <h2>Significados:</h2>
            <br/>
            {w.meanings.map(meaning =>(
                <div>
                    <h3>Função: {meaning.partOfSpeech}</h3>
                    <h3>Definição: {meaning.definitions[0].definition}</h3>
                    <h3>Exemplo: {meaning.definitions[0].example}</h3>
                    <br/>
                </div>
            ))}
        </div>
    )
}

export default Word;
