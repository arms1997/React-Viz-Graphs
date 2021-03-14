import { useState } from "react";

import {
  FlexibleWidthXYPlot,
  AreaSeries,
  LineSeries,
  Hint,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
} from "react-vis";
import "../../node_modules/react-vis/dist/style.css";

import NewsBubble from "./Bubbles/NewsBubble";
import QuestionBubble from "./Bubbles/QuestionBubble";

export default function LineWithDynamicBubbles(props) {
  const [areaHover, setAreaHover] = useState({});
  const [hintData, setHintData] = useState();
  const [hover, setHover] = useState(false);
  const [showNews, setShowNews] = useState(false);

  const { alphaData } = props;

  const areaData = [
    [alphaData[0], alphaData[1], alphaData[2], alphaData[3], alphaData[4]],
    [alphaData[10], alphaData[11], alphaData[12], alphaData[13], alphaData[14]],
    [alphaData[60], alphaData[61], alphaData[62], alphaData[63], alphaData[64]],
  ];

  const areaSeries = areaData.map((data, index) => {
    return (
      <AreaSeries
        key={index}
        data={data}
        opacity={areaHover[index] ? 0.6 : 0.4}
        color="#b4cbf0"
        onSeriesMouseOver={() => {
          setHover(true);
          setHintData(areaData[index]);
          setAreaHover((prev) => ({ ...prev, [index]: true }));
        }}
        onSeriesMouseOut={() => {
          setHover(false);
          setAreaHover((prev) => ({ ...prev, [index]: false }));
          setShowNews(false);
        }}
        onSeriesClick={() => setShowNews(true)}
      />
    );
  });

  return (
    <FlexibleWidthXYPlot height={500}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <LineSeries animation data={alphaData} />
      {areaSeries}
      {hover && (
        <Hint
          value={hintData[Math.ceil(hintData.length / 2)]}
          style={{ marginBottom: "10px" }}
        >
          {showNews ? (
            <NewsBubble title="Tesla bought 50 billion bitcoin" />
          ) : (
            <QuestionBubble />
          )}
        </Hint>
      )}
    </FlexibleWidthXYPlot>
  );
}
