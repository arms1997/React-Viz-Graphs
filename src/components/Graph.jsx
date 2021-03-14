import LineGraphBubble from "./line-graph-with-bubble";

export default function Graph(props) {
  return <div>{props.lineWithBubble && <LineGraphBubble />}</div>;
}
