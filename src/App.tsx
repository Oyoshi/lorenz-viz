import { useState } from "react";
import { InputsForm } from "components/inputs-form";
import { ScatterPlot } from "components/scatter-plot";
import { solveRK4 } from "ode-solver/rk4";

type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>;
type FormSubmitEventHandler = React.FormEventHandler<HTMLFormElement>;
type InputsValues = Record<string, number>;

export const App = () => {
  const [coefficients, setCoefficients] = useState<InputsValues>({});
  const [traces, setTraces] = useState({});

  const handleInputChange: InputChangeEventHandler = (e) => {
    const target = e.currentTarget;
    setCoefficients({ ...coefficients, [target.name]: Number(target.value) });
  };

  const handleSubmit: FormSubmitEventHandler = (e) => {
    e.preventDefault();
    const x_fun = (x: number, y: number) => coefficients["sigma"] * (y - x);
    const y_fun = (x: number, y: number, z: number) =>
      x * (coefficients["rho"] - z) - y;
    const z_fun = (x: number, y: number, z: number) =>
      x * y - coefficients["beta"] * z;
    setTraces(solveRK4(x_fun, y_fun, z_fun));
  };

  return (
    <>
      <InputsForm onChange={handleInputChange} onSubmit={handleSubmit} />
      <ScatterPlot
        trace={[
          {
            ...traces,
            type: "scatter3d",
            mode: "lines",
            line: { color: "#6047f4" },
          },
        ]}
      />
    </>
  );
};
