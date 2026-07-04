import { Controller, useFormContext } from "react-hook-form";

export default function FormField({
  name,
  component: Component,
  label,
  placeholder = null,
  ...props
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label>{label}</label>}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Component
            {...field}
            {...props}
            className={`w-full ${props.className || ""}`}
            inputClassName="w-full"
            style={{ width: "100%" }}
            inputStyle={{ width: "100%" }}
          />
        )}
      />

      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
}
