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

export default function LineAreaBubble(props) {
  const [hoveredNode, setHoveredNode] = useState({});
  const [newsAreaHover, setNewsAreaHover] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [currentHint, setCurrentHint] = useState([]);

  const { alphaData, areaData } = props;

  const lessThan5 = alphaData.filter((data) => data.x <= 5);
  const lessThan15 = alphaData.filter((data) => data.x <= 15 && data.x >= 10);

  const newAreaData = [lessThan5, lessThan15];

  const areaSeries = newAreaData.map((data, index) => {
    return (
      <AreaSeries
        opacity={0.5}
        data={data}
        animation
        onSeriesClick={(event) => setCurrentHint(index)}
      />
    );
  });

  return (
    <div>
      <FlexibleWidthXYPlot height={500}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis
        // tickFormat={(v) => xAxisParser(v, DATA)}
        />
        <YAxis />
        <LineSeries
          data={alphaData}
          animation
          onNearestX={(value) => setHoveredNode({ ...value })}
        />
        <AreaSeries
          data={areaData}
          opacity={newsAreaHover ? 0.6 : 0.4}
          onSeriesMouseOver={() => setNewsAreaHover(true)}
          onSeriesMouseOut={() => {
            setNewsAreaHover(false);
          }}
          onSeriesClick={() => setShowBubble(!showBubble)}
          animation
        />
        {areaSeries}
        <MarkSeries data={[hoveredNode]} />
        {newsAreaHover && (
          <Hint
            align={{ vertical: "top", horizontal: "left" }}
            value={areaData[Math.ceil(areaData.length / 2)]}
          >
            {showBubble ? (
              <NewsBubble title="TSLA in a Bind" />
            ) : (
              <QuestionBubble />
            )}
          </Hint>
        )}
      </FlexibleWidthXYPlot>
    </div>
  );
}
