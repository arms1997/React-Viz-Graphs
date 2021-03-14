import {
  FlexibleWidthXYPlot,
  AreaSeries,
  LineSeries,
  Hint,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
} from "react-vis";
import "../../../node_modules/react-vis/dist/style.css";

import { parser, xAxisParser } from "../../samples/parser";
import DATA from "../../samples/alpha_vantage";

export default function LineGraphBubble(props) {
  const alphaData = parser({ ...DATA });

  const areaData = alphaData.filter((data) => data.x > 50 && data.x < 64);

  return (
    <div>
      <FlexibleWidthXYPlot height={500}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickFormat={(v) => xAxisParser(v, DATA)} />
        <YAxis />
        <LineSeries data={alphaData} animation />
        <AreaSeries data={areaData} opacity={0.4} animation />
      </FlexibleWidthXYPlot>
    </div>
  );
}
