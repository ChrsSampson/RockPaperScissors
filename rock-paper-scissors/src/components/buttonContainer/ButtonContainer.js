import PlayButton from "../playButton/PlayButton"


export default function ButtonContainer(props){
    return(
        <article className="ButtonContainer column">
            <div className="row">
                <PlayButton value="rock" setPlayerMove={props.f}/>
                <PlayButton value="paper" setPlayerMove={props.f}/>
            </div>
            <div className="row">
                <PlayButton value="scissors" setPlayerMove={props.f}/>
            </div>
        </article>
    )
}