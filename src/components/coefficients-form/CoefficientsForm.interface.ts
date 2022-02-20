type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>;
type FormSubmitEventHandler = React.FormEventHandler<HTMLFormElement>;

export interface ICoefficientsFormsProps {
  onChange: InputChangeEventHandler;
  onSubmit: FormSubmitEventHandler;
}
