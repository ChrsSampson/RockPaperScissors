import PlayButton from "../playButton/PlayButton"


export default function PlayButtonContainer(props){
    return(
        <article className="PlayButtonContainer column">
            <div className="row">
                <PlayButton value="rock" setPlayerMove={props.onClick}/>
                <PlayButton value="paper" setPlayerMove={props.onClick}/>
            </div>
            <div className="row">
                <PlayButton value="scissors" setPlayerMove={props.onClick}/>
            </div>
        </article>
    )
}