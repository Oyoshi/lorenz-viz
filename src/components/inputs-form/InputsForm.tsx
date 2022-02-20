import { IInputsFormsProps } from "./InputsForm.interface";
import { INPUTS } from "./InputsForm.const";
import { Input, Button } from "./controls";

export const InputsForm: React.FC<IInputsFormsProps> = ({
  onChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit}>
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
    <Button type="submit">Visualize</Button>
  </form>
);
