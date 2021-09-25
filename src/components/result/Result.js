import PlayButton from '../playButton/PlayButton';
import MenuButton from '../ruleButton/MenuButton';

export default function Result(props) {
    return(
        <article className="Result column">
            {(props.result === 'Draw') ?
                <h1 className="title">It's a {props.result}</h1> :
                <h1 className="title">You {props.result}!</h1>
            }
            <div className="row">
                <div className="column">
                    <h4 className="result-text">You picked {props.moves.player}</h4>
                    <PlayButton value={props.moves.player}  />
                </div>
                <div className="column">
                    <h4 className="result-text">I picked {props.moves.comp}</h4>
                    <PlayButton value={props.moves.comp} />
                </div>
            </div>
            <MenuButton text="Play Again?" onClick={props.onClick} />
        </article>
    )
}