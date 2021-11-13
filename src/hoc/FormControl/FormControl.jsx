import style from "./FormControl.module.css"


const FormControl = ({input, meta, ...props}) => {
    return (
        <div >
          <div>
           {props.children}
          </div>
          <div>
          {meta.touched && ((meta.error && <span className={style.formBlock}>{meta.error}</span>) 
          || (meta.warning && <span className={style.formBlock}>{meta.warning}</span>))}
          </div>
        </div>
      );
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props
  return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
  );
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
  return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
  );
};
  