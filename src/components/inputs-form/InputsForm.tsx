import { IInputsFormsProps } from "./InputsForm.interface";
import { INPUTS_NAMES } from "./InputsForm.const";

// TODO - remove inline stylings
export const InputsForm: React.FC<IInputsFormsProps> = ({
  onChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} style={{ margin: "30px" }}>
    {INPUTS_NAMES.map((inpName: string) => (
      <input
        key={inpName}
        id={inpName}
        name={inpName}
        type="number"
        step="any"
        style={{ margin: "30px" }}
        onChange={onChange}
      />
    ))}
    <button type="submit">Visualize</button>
  </form>
);
