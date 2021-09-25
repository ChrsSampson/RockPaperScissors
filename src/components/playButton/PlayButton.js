import paperIcon from '../../icons/icon-paper.svg';
import rockIcon from '../../icons/icon-rock.svg'
import scissorsIcon from'../../icons/icon-scissors.svg'

// Props value: [rock, paper, scissors]
export default function PlayButton(props) {

    let icon = ''

    switch (props.value) {
        case 'rock':
            icon = rockIcon
            break;
        case 'paper':
            icon = paperIcon
            break;
        case 'scissors':
            icon = scissorsIcon
            break;
        default:
            icon = ''
            break;
    }

     return (
         <button className={`PlayButton PlayButton-${props.value}`} data-value={props.value} onClick={(e) => props.setPlayerMove ? props.setPlayerMove(e) : null}>
             <img src={icon} alt={`${props.value} Icon`} />
         </button>
     )
}