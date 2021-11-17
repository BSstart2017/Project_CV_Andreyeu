import style from "./FormControl.module.css"


const FormControl = ({meta: {error, touched, warning}, children}) => {
    return (
        <div >
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

export const TextArea = ({input,...props}) => {
  return (
        <FormControl {...props}>
            <textarea {...input} {...props}/>
        </FormControl>
  );
};

export const Input = ({input,...props}) => {
  return (
        <FormControl {...props}>
            <input {...input} {...props}/>
        </FormControl>
  );
};
  