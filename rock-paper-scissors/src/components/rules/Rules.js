import closeIcon from '../../icons/icon-close.svg'


export default function Rules(props) {
    return(
        <div className="Rules-Container">
            <button className="Close" onClick={props.onClick}>
                <img src={closeIcon} alt="Close Rules" />
            </button>
            <div className="Rules">
                <h1>Rules</h1>
                <ul>
                    <li>Click a button to make a move.</li>
                    <li>Rock beats scissors, scissors beats paper, and paper beats rock. </li>
                    <li>Win and you score a point</li>
                    <li>Lose and you lose a point</li>
                    <li>If you make the same move as the computer, it's a draw</li>
                    <li>Go for a high score.</li>
                </ul>
            </div>
        </div>
    )
}