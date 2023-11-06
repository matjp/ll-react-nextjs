interface BookFormProps {
  formAction: (formData: FormData) => Promise<void>;
  formName: string;
  formValue: string;
  disabled: boolean;
}

export default function BookForm( { formAction, formName, formValue, disabled } : BookFormProps ) {
  return (
    <>
      <form aria-label={formName} action={formAction} className="p-2 flex justify-center">
        <button name={formName} value={formValue} disabled={disabled}
          className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-500 text-white font-bold py-2 px-4 rounded items-center">{formName[0].toUpperCase() + formName.slice(1).toLowerCase()}</button>
      </form>
    </>
  )
}