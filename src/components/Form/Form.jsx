import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export default function Form({ schema, defaultValues, onSubmit,className, children }) {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });
  return (
    <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
            {children}
        </form>
    </FormProvider>
  )
}
