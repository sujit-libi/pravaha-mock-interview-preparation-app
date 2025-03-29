import React from 'react';
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'file';
}

const FormField = ({
  name,
  control,
  label,
  placeholder,
  type = 'text',
}: FormFieldProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input
            className="input"
            type={type}
            placeholder={placeholder}
            {...field}
          />
        </FormControl>
        {/* <FormDescription>This is your public display name.</FormDescription> */}
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
