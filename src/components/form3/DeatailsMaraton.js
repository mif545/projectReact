import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ShirtSize from './ShirtSize';
import TreeView from '@material-ui/lab/TreeView';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { connect } from 'react-redux';
import {saveDeatailsMaratonUser} from '../../store/action'
import useForm from './useForm';
import InputText from './Input';


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

const  DeatailsMaraton=(props)=>{
   
    let initialFValues={
      runningGroup:props.user?props.user.runningGroup:'',
      nickname:props.user?props.user.nickname:'',
      targetTime:props.user?props.user.targetTime:'',
      registrationCode:props.user?props.user.registrationCode:'',
      jerusalemite:props.user?props.user.jerusalemite:'',
      newcomer:props.user?props.user.newcomer:'',
      shirtSize:props.user?props.user.shirtSize:'',
    }
    
    const validate=(fieldValues=values)=>{
      
      let temp={...errors}
      if('runningGroup' in  fieldValues)
       temp.runningGroup=fieldValues.runningGroup?"":"this file is require"
      if('nickname' in  fieldValues)
      temp.nickname=fieldValues.nickname?"":"this file is require"

    
      setErrors({
        ...temp,

      })
      if(fieldValues==values)
      return Object.values(temp).every(x=>x=="");
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
        props.saveDeatailsMaratonUser(values);
        props.changeDisplayRulls();
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
          <TreeItem nodeId="1" label="פרטי המרוץ" style={{marginBottom:"3%"}} > 
          
            <InputText
              label="מועדון/קבוצת ריצה"
              name="runningGroup"
              value={values.runningGroup}
              onChange={handelInpputChanges}
              error={errors.runningGroup}
               />
             <InputText
              label="כינוי שיודפס על מס' חוזה"
              name="nickname"
              value={values.nickname}
              onChange={handelInpputChanges}
              error={errors.nickname}
               />
        
            <FormControl className={classes.formControl} style={{width:"40%",direction:"rtl",marginLeft:"5%",marginBottom:"3%"}}>
              <InputLabel htmlFor="age-native-simple">זמן מטרה*</InputLabel>
              <Select
                native
                name="targetTime"
                value={values.targetTime}
                onChange={handelInpputChanges} 
              >
                <option aria-label="None" value="" />
                <option value="30-34">30-34</option>
                <option value="35-40">35-40</option>
                <option value="41-45">41-45</option>
                <option value="46-50">46-50</option>
                <option value="51-55">51-55</option>
                <option value="56-60">56-60</option>
                <option value="61-65">61-65</option>
                <option value="66-70">66-70</option>
                <option value="71-80">71-80</option>
                <option value={"80 ומעלה"}>80 ומעלה</option>
              </Select>
            </FormControl>
            <InputText
              label="קוד רישום אם קיים"
              name="registrationCode"
              value={values.registrationCode}
              onChange={handelInpputChanges}
              error={errors.registrationCode}
               />
            
            <Button variant="contained"  style={{backgroundColor:"grey",color:"black",marginRight:"60%",marginBottom:"3%",marginLeft:"20%"}}>
                    בדוק קוד
            </Button>      
              <FormControlLabel style={{width:"40%",direction:"rtl",marginRight:"0%",marginBottom:"3%" }}
              control={
                <Checkbox 
                name="jerusalemite"
                onChange={handelInpputChanges}
                color="primary"
                />
              }
              label="מחזיק כרטיס ירושלמי"
            />
              <FormControlLabel  style={{width:"40%",direction:"rtl",marginBottom:"3%" }}
              control={
                <Checkbox  
                  name="newcomer" 
                  onChange={handelInpputChanges}
                  color="primary"
                />
              }
              label="מסלול עולה חדש (תאריך עלייה 1.1.2019 ואילך)
              "
            />
           
           <ShirtSize name="shirtSize" shirtSize={values.shirtSize} handleInputChange={handelInpputChanges} num={props.numUsers}/>
         
        <div style={{marginBottom:"5%",marginTop:"3%"}}>
        <Button  className={classes.backButton} variant="contained" color="primary" onClick={props.changeDisplayFalseMaraton}>הקודם</Button>
          <Button onClick={handleSubmit}  >הבא</Button>    
        
        </div>
       
          </TreeItem> 
         </TreeView>
    );
  }
  const mapDispachToProps=(dispach)=>{
    return {
      user:dispach.deatailsMaratonUser,
      numUsers:dispach.kindMaraton.numUsers
    } 
  }

  export default  connect(mapDispachToProps,{saveDeatailsMaratonUser})(DeatailsMaraton)

