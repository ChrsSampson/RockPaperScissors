import logo from '../../icons/logo.svg'

export default function ScoreBoard(props) {
    return(
        <article className="Scoreboard-wrapper">
            <div className="column">
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <div className="column score">
                <sub>Score</sub>
                <span>{props.score}</span>
            </div>
        </article>
    )
}