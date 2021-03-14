import "./styles/QuestionBubble.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

export default function NewsBubble(props) {
  return (
    <div className="bubble__item">
      <FontAwesomeIcon icon={faQuestion} />
    </div>
  );
}
