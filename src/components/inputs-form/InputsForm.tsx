import { IInputsFormsProps } from "./InputsForm.interface";
import { INPUTS } from "./InputsForm.const";
import Input from "./Input";

// TODO - remove inline stylings
export const InputsForm: React.FC<IInputsFormsProps> = ({
  onChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} style={{ margin: "30px" }}>
    {INPUTS.map((inp: { name: string; label: string }) => (
      <Input
        key={inp.name}
        id={inp.name}
        name={inp.name}
        type="number"
        step="any"
        onChange={onChange}
        label={inp.label}
        required
      />
    ))}
    <button type="submit">Visualize</button>
  </form>
);
