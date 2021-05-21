import { Typography } from "@material-ui/core";

const Word = ({w}) => {
    return (
        <div className="word">
            <Typography variant="h3">Palavra: {w.word}</Typography>
            <br/>
            <Typography variant="h4">Significados:</Typography>
            <br/>
            {w.meanings.map(meaning =>(
                <div>
                    <Typography variant="h5">Função: {meaning.partOfSpeech}</Typography>
                    <Typography variant="h5">Definição: {meaning.definitions[0].definition}</Typography>
                    <Typography variant="h5">Exemplo: {meaning.definitions[0].example}</Typography>
                    <br/>
                </div>
            ))}
        </div>
    )
}

export default Word;
