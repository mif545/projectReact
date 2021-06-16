import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import {idUserSaved} from  "../../store/action"


//insert id
const ResetIdForm = (props) => {
    let [id,setId]=useState(props.id);
    //change id when you insert id
    const handleInputChange=(e) =>{
    
        const target = e.target;
        const value = target.value;
        setId(value);
        props.idUserSaved(value);
        console.log("gitHab")
      
      }
      
    return ( <TextField
                required id="standard-required"
                label="אנא הזן תעודת זהות" 
                name="id"
                value={id} 
                style={{width:"20%",marginLeft:"1%",marginBottom:"3%"}}
                onChange={handleInputChange}
                 
                 />
    );
}
const mapDispachToProps=(dispach)=>{
    return {
      id:dispach.IdUser
    } 
 }
export default connect(mapDispachToProps,{idUserSaved})(ResetIdForm);;