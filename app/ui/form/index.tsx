import { FormHTMLAttributes, InputHTMLAttributes, forwardRef } from "react";
import {
  FormProvider,
  RegisterOptions,
  useForm,
  useFormContext,
  SubmitHandler,
  FieldValues,
  ChangeHandler,
} from 'react-hook-form';
import clsx from "clsx";
import styles from "./form.css";

interface UseFormProps<T extends FieldValues> extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  onSubmit: SubmitHandler<T>;
}

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'pattern'> {
  label: string;
  labelSrOnly?: boolean;
  field: string;
  onChange?: ChangeHandler;
  options?: RegisterOptions;
};

export function Form<T extends FieldValues>({
  onSubmit,
  children,
  className,
  ...props
}: UseFormProps<T>) {
  const methods = useForm<T>();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={className}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  labelSrOnly = false,
  field,
  options,
  className,
  ...props
}, reference) => {
  const { register, formState: { errors } } = useFormContext();
  const { ref, ...rest } = register(field, options);
  return (
    <div className={clsx(styles.inputWrapper, className)}>
      <label
        className={clsx(styles.label, { [styles.srOnly]: labelSrOnly })}
        htmlFor={field}>
        {label}
      </label>
      <input
        className={clsx(styles.input, { [styles.inputError]: errors[field]?.message })}
        ref={(e) => {
          ref(e);
          if (!reference)
            return;
          if (typeof reference === 'function') {
            reference(e);
            return;
          }
          reference.current = e;
        }}
        id={field}
        {...rest}
        {...props}
      />
      {errors[field]?.message && (
        <span className={styles.error}>
          {errors[field]?.message as string}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';
Form.Input = Input;

