import React, {  useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Calender from './Calender';
import TreeView from '@material-ui/lab/TreeView';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Button from '@material-ui/core/Button';
import {saveDeatailsUser} from '../../store/action'
import { connect } from 'react-redux';
import { Input } from '@material-ui/core';
import InputText from './Input';
import useForm from './useForm';
import { Form } from 'semantic-ui-react';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  MuiSvgIcon: {
    root: {
        width: 18,
        height: 18,
    },
},
root2: {
  height: "50%",
  flexGrow: 1,
  maxWidth:"100%",
},
}));




const Deatails=(props)=> {
  let[l,setL]=useState(false)
  let initialFValues={
    firstName:props.user?props.user.firstName:'',
    lastName:props.user?props.user.lastName:'',
    sex:props.user?props.user.sex:'',
    dateOfBirth:props.user?props.user.dateOfBirth:'',
    postalCode:props.user?props.user.postalCode:'',
    city:props.user?props.user.city:'',
    addres:props.user?props.user.addres:'',
    mail:props.user?props.user.mail:'',
    phone:props.user?props.user.phone:''
  }
    
   
    
   
    const validate=(fieldValues=values)=>{
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let temp={...errors}
      if('firstName' in  fieldValues)
       temp.firstName=fieldValues.firstName?"":"this file is require"
      if('lastName' in  fieldValues)
      temp.lastName=fieldValues.lastName?"":"this file is require"
      if('postalCode' in  fieldValues)
      temp.postalCode=fieldValues.postalCode?"":"this file is require"
      if('city' in  fieldValues)
      temp.city=fieldValues.city?"":"this file is require"
      if('addres' in  fieldValues)
      temp.addres=fieldValues.addres?"":"this file is require"
      if('mail' in  fieldValues)
      temp.mail=fieldValues.mail?re.test(fieldValues.mail)?"":"error email":"email is not valid"
      if('phone' in  fieldValues)
      temp.phone=fieldValues.phone?fieldValues.phone.length>=10?"":"min 10 nums":"phone is not valid"
      setErrors({
        ...temp,

      })

      

      if(fieldValues==values){
        setL(true)
      return Object.values(temp).every(x=>x=="");
    }
    }
    const {values,
           setValues,
           errors,
           setErrors,
            handelInpputChanges,
            resetForm
          }=useForm(initialFValues,true,validate)
    const classes = useStyles();
  

    const handleSubmit=(e)=>{
      
      e.preventDefault()
      if(validate()){
        props.saveDeatailsUser(values);
        props.changeDisplayMaraton();
      }
      
     
    }
   
    return (  

  <TreeView
      className={classes.root2}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
      style={{direction:"rtl",border:"1 solid black",width:"90%",marginLeft:"5%",backgroundColor:"background.paper",boxShadow:"rgb(230 230 230) -1px 2px 3px 3px"}} noValidate autoComplete="off"
    >
    <TreeItem nodeId="1" label="פרטים אישיים" style={{marginBottom:"3%"}} > 
    <Form >
       <InputText
      
       label="שם פרטי"
       name="firstName" 
       value={values.firstName} 
       onChange={handelInpputChanges}
       error={errors.firstName}
         />
       <InputText
      
       label="שם משפחה"
       name="lastName" 
       value={values.lastName} 
       onChange={handelInpputChanges}
       error={errors.lastName}
         />
       <FormControl className={classes.formControl} style={{width:"40%",direction:"rtl",marginRight:"5%",marginBottom:"3%",float:"right"}}>
        <InputLabel  htmlFor="age-native-simple">מין*</InputLabel>
        <Select
          native
          value={values.sex} 
          onChange={handelInpputChanges}
          inputProps={{
            name: 'sex',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"זכר"}>זכר</option>
          <option value={"נקבה"}>נקבה</option>
        </Select>
      </FormControl>
      <Calender name="dateOfBirth" date={values.dateOfBirth} handleInputChange={handelInpputChanges}/>
      <InputText
       
       label="עיר מגורים"
       name="city" 
       value={values.city} 
       onChange={handelInpputChanges}
       error={errors.city}
         />
       <InputText
     
       label="מיקוד"
       name="postalCode" 
       value={values.postalCode} 
       onChange={handelInpputChanges}
       error={errors.postalCode}
         />
       <InputText
      
       label="רחוב ומספר"
       name="addres" 
       value={values.addres} 
       onChange={handelInpputChanges}
       error={errors.addres}
         />
       <InputText
      
       label="כתובת מייל"
       name="mail" 
       value={values.mail} 
       onChange={handelInpputChanges}
       error={errors.mail}
         />
        <InputText
      
       label="טלפון נייד"
       name="phone" 
       value={values.phone} 
       onChange={handelInpputChanges}
       error={errors.phone}
         />
        <div style={{marginBottom:"5%"}}>
   
        
        <Button onClick={props.handleBack}  variant="contained" color="primary" className={classes.backButton}>הקודם</Button>
       {l?  <Button onClick={handleSubmit}  color="primary" className={classes.backButton}>הבא</Button>
       :  <Button onClick={handleSubmit}  >הבא</Button>}
      
        {/* <input type="button" onClick={handleSubmit} value="הבא"/> */}
        {/* <input type="submit" /> */}
        </div>  
        </Form>
   </TreeItem> 
  </TreeView>   

    );
  }
  const mapDispachToProps=(dispach)=>{
    return {
      user:dispach.deatailsUser
    } ;
  }
  export default  connect(mapDispachToProps,{saveDeatailsUser})(Deatails);