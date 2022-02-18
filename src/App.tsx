import { useState } from "react";
import { InputsForm } from "components/inputs-form";
import { ScatterPlot } from "components/scatter-plot";

type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>;
type FormSubmitEventHandler = React.FormEventHandler<HTMLFormElement>;
type InputsValues = Record<string, number>;

export const App = () => {
  const [coefficients, setCoefficients] = useState<InputsValues>({});

  const handleInputChange: InputChangeEventHandler = (e) => {
    const target = e.currentTarget;
    setCoefficients({ ...coefficients, [target.name]: Number(target.value) });
  };

  const handleSubmit: FormSubmitEventHandler = (e) => {
    e.preventDefault();
    // TODO - as validation (all fields are required) and pass it to the calculation service
    console.log(coefficients);
  };

  return (
    <>
      <InputsForm onChange={handleInputChange} onSubmit={handleSubmit} />
      <ScatterPlot trace={[]} />
    </>
  );
};
