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

import { parser, xAxisParser } from "../samples/parser";
import DATA from "../samples/alpha_vantage";

export default function LineAreaBubble(props) {
  const [hoveredNode, setHoveredNode] = useState({});
  const [newsAreaHover, setNewsAreaHover] = useState(false);

  const alphaData = parser({ ...DATA });

  const areaData = alphaData.filter((data) => data.x > 50 && data.x < 64);

  return (
    <div>
      <FlexibleWidthXYPlot height={500}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickFormat={(v) => xAxisParser(v, DATA)} />
        <YAxis />
        <LineSeries
          data={alphaData}
          animation
          onNearestX={(value) => setHoveredNode({ ...value })}
        />
        <AreaSeries
          data={areaData}
          opacity={0.4}
          onSeriesMouseOver={() => setNewsAreaHover(true)}
          onSeriesMouseOut={() => setNewsAreaHover(false)}
          animation
        />
        <MarkSeries data={[hoveredNode]} />
        {newsAreaHover && (
          <Hint value={areaData[Math.ceil(areaData.length / 2)]} />
        )}
      </FlexibleWidthXYPlot>
    </div>
  );
}
