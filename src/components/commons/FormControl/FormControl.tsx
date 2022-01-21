import React from "react";
import { WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import style from "./FormControl.module.css"


const FormControl: React.FC<FormControlParamsType> = ({meta: {error, touched, warning},
                                                        children}) => {
  return (
    <div>
      <div>
        {children}
      </div>
      <div>
        {touched && ((error && <span className={style.formBlock}>{error}</span>)
          || (warning && <span className={style.formBlock}>{warning}</span>))}
      </div>
    </div>
  );
}

export const TextArea: React.FC<WrappedFieldProps> = ({input, ...props}) => {
  return (
    <FormControl {...props}>
      <textarea {...input} {...props}/>
    </FormControl>
  );
};

export const Input: React.FC<WrappedFieldProps> = ({input, ...props}) => {
  return (
    <FormControl {...props}>
      <input {...input} {...props}/>
    </FormControl>
  );
};



type FormControlParamsType = {
  meta: WrappedFieldMetaProps,
  children: React.ReactNode
}