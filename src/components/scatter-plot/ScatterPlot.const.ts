import { Layout as ILayout, Config as IConfig } from "plotly.js";

export const customLayout: Partial<ILayout> = {
  width: 900,
  height: 800,
  showlegend: false,
};

export const customConfig: Partial<IConfig> = {
  displayModeBar: false,
};
