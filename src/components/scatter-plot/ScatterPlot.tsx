import Plot from "react-plotly.js";
import { IScatterPlotProps } from "./ScatterPlot.interface";
import { customLayout, customConfig } from "./ScatterPlot.const";

export const ScatterPlot: React.FC<IScatterPlotProps> = ({ trace }) => (
  <Plot data={trace} config={customConfig} layout={customLayout} />
);
