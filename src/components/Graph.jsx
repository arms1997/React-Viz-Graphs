import LineAreaBubble from "./LineAreaBubble";

import { parser, xAxisParser } from "../samples/parser";
import DATA from "../samples/alpha_vantage";

export default function Graph(props) {
  const alphaData = parser({ ...DATA });

  const areaData = alphaData.filter((data) => data.x > 50 && data.x < 64);

  return (
    <div>
      {props.lineWithBubble && (
        <LineAreaBubble areaData={areaData} alphaData={alphaData} />
      )}
    </div>
  );
}
