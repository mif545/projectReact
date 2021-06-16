import { TextField } from "@material-ui/core";

const InputText = (props) => {
    const {label,name,value,onChange,error=null}=props
    return (<>
        <TextField
        
        id="standard-error-helper-text"
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        {...(error&&{error:true , helperText:error})}
        style={{width:"40%",direction:"rtl",marginLeft:"5%",marginBottom:"3%",marginTop:"3%"}} />
        
     </> );
}
 
export default InputText;