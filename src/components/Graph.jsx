import LineAreaBubble from "./LineAreaBubble";

export default function Graph(props) {
  return <div>{props.lineWithBubble && <LineAreaBubble />}</div>;
}
