import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import { useState } from "react";
import { SelectValidator } from "react-material-ui-form-validator";

const useForm = (initialFValues,validateOnChange=false,validate) => {
    const [values,setValues]=useState(initialFValues);
    const [errors,setErrors]=useState({});

    const handelInpputChanges=e=>{
        const {name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })
        if(validateOnChange)
        validate({[name]:value})
    }
    const resetForm=()=>{
        setValues(initialFValues);
        setErrors({})
    }
    return ({values,
            setValues,
            errors,
            setErrors,
            handelInpputChanges,
            resetForm } );
}
 
export default useForm; 

export const Form=(props)=>{
const classes=useStyles();
const {children, ...other}=props;
return(
    <form outoComplete="off" {...other}>
        {props.children}
    </form>
)
}
