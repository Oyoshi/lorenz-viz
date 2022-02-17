import { ScatterPlot } from "./components/scatter-plot";

function randomValues(num: any, mul: any) {
  const arr = [];
  const index = [];
  for (let i = 0; i < num; i++) {
    arr.push(Math.random() * mul);
    index.push(i);
  }
  return { index, arr };
}

export const App = () => {
  const traces: any = Array(3)
    .fill(0)
    .map((_, i) => {
      const { index, arr } = randomValues(20, 3);
      return {
        x: Array(20).fill(i),
        y: index,
        z: arr,
        type: "scatter3d",
        mode: "lines",
      };
    });

  return <ScatterPlot trace={traces} />;
};
