type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>;
type FormSubmitEventHandler = React.FormEventHandler<HTMLFormElement>;

export interface IInputsFormsProps {
  onChange: InputChangeEventHandler;
  onSubmit: FormSubmitEventHandler;
}
