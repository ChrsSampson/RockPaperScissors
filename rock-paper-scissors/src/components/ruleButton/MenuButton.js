

export default function MenuButton(props) {
  return (
    <div className="MenuButton-container column">
        <button className="MenuButton" onClick={props.onClick}>{props.text}</button>
    </div>
    );
}