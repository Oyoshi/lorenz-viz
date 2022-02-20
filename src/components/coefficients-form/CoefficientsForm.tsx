import styled from "styled-components";
import { ICoefficientsFormsProps } from "./CoefficientsForm.interface";
import { INPUTS } from "./CoefficientsForm.const";
import { Input, Button } from "./controls";

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CoefficientsForm: React.FC<ICoefficientsFormsProps> = ({
  onChange,
  onSubmit,
}) => (
  <FormWrapper>
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
  </FormWrapper>
);
