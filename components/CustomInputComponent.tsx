import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Controller } from "react-hook-form"
import { Input } from "@/components/ui/input"

const CustomInputComponent = ({
  form,
  label,
  placeholder,
  type = "text",
}: CustomInputComponentProps) => {
  return (
    <Controller
      name={label as FormFieldNames}
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className="form-item">
          <FieldLabel htmlFor={field.name} className="form-label">
            {label.toUpperCase()}
          </FieldLabel>
          <div className="flex w-full">
            <Input
              {...field}
              type={type}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder={placeholder}
              className="input-class"
            />
          </div>
          {fieldState.invalid && (
            <FieldError
              errors={[fieldState.error]}
              className="form-message mt-2"
            />
          )}
        </Field>
      )}
    />
  )
}

export default CustomInputComponent
