import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TreeView from '@material-ui/lab/TreeView';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { connect } from 'react-redux';
import {saveDeatailsRullsUser} from '../../store/action'
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

const  RulesAndPolicies=(props)=> {
    const classes = useStyles();
    
    let initialFValues={
      whyChoose:props.user?props.user.whyChoose:'',
      whatExciting:props.user?props.user.whatExciting:'',
      acceptTerms:props.user?props.user.acceptTerms:'',
      receivingInformation:props.user?props.user.receivingInformation:'',
      
    }
    const validate=(fieldValues=values)=>{
      
      let temp={...errors}
      if('whyChoose' in  fieldValues)
       temp.whyChoose=fieldValues.whyChoose?"":"this file is require"
      if('whatExciting' in  fieldValues)
      temp.whatExciting=fieldValues.whatExciting?"":"this file is require"
      // if('acceptTerms' in  fieldValues)
      // temp.acceptTerms=fieldValues.acceptTerms?"":"this file is require"
      // if('receivingInformation' in  fieldValues)
      // temp.receivingInformation=fieldValues.receivingInformation?"":"this file is require"
     
    
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

     const handleSubmit=(e)=>{
      e.preventDefault()
       if(validate()){
        props.saveDeatailsRullsUser(values);
        props.handleNext();
    }
   }      

     //change valus in textFiled by name when inserted value
    // const handleInputChange=(e) =>{
    //   const target = e.target;
    //   const value = target.type === 'checkbox' ? target.checked : target.value;
    //   const name = target.name;
     
    //   switch (name){
    //     case("whyChoose"):{
    //       setWhyChoose(value);
          
    //       break;
    //     }
    //     case("whatExciting"):{
    //       setWhatExciting(value);
    //       break;
    //     }
    //     case("acceptTerms"):{
    //       setAcceptTerms(value);
    //       break;
    //     }
    //     default:{
    //       setReceivingInformation(value);
         
    //     }
    //   }
   
    // }
    //send deatails terms to redux 
    // const saveDeatailsRull=()=>{
    //   const deatailsRullsUser={
    //        "whyChoose":whyChoose,
    //        "whatExciting":whatExciting,
    //        "acceptTerms":acceptTerms,
    //        "receivingInformation":receivingInformation
    //   }
    //   props.saveDeatailsRullsUser(deatailsRullsUser);
    //   //movve to next page and move forward with the stepper
    //   props.handleNext();
    // }
    return (    
      <TreeView
        className={classes.root2}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
        style={{direction:"rtl",border:"1 solid black",width:"90%",marginLeft:"5%",backgroundColor:"background.paper",boxShadow:"rgb(230 230 230) -1px 2px 3px 3px"}} noValidate autoComplete="off"
        >
         <TreeItem nodeId="1" label="תקנון ומדיניות" style={{marginBottom:"3%"}} > 
         <InputText
          label="למה בחרת לרוץ במרתון ירושלים?"
          name="whyChoose" 
          value={values.whyChoose} 
          onChange={handelInpputChanges}
          error={errors.whyChoose}
        />
        <InputText
          label="מה מרגש אותך לקראת מרתון ירושלים?"
          name="whatExciting"
          value={values.whatExciting} 
          onChange={handelInpputChanges}
          error={errors.whatExciting}
        />
            <div style={{border:"1 solid black",width:"90%",padding:"2%",textAlign:"right",borderRadius:"20px",marginRight:"3%",backgroundColor:"background.paper",boxShadow:"rgb(230 230 230) -1px 2px 3px 3px"}}>
                <p>הצהרה: • אני החתום מטה מצהיר בזאת כי ידוע לי שאני מתעתד להשתתף באירוע ספורט המהווה מאמץ גופני ניכר. אני מצהיר בזאת שהנני בריא וכשיר למרוץ והתאמנתי כיאות לקראתו. אני מבין כי השתתפותי במידה ואיני מוכן גופנית כראוי עלולה לסכן את בריאותי. אם סבלת או הנך חושד כי סבלת במהלך השבוע הסמוך למרוץ ממחלה כלשהי, לרבות חום, הפרעות במערכת העיכול או שיעול, יש להיוועץ ברופא לפני ההשתתפות בפעילות ולקבל אישורו לביצוע המאמץ. •אני מוותר בזאת על כל טענה כלפי הוועדה המארגנת, עיריית ירושלים ומי מטעמה, בכל הנוגע לאחריות לנזק כלשהו שייגרם לי, לרבות נזקי גוף שייגרמו לי טרם המרוץ במהלכו או אחריו, ולרבות נזקי רכוש ו/או אבדן ציוד שייגרמו לי. מוסכם עלי שהגורמים המארגנים יהיו רשאים לקבל כל החלטה הנוגעת לביטול ו/או שינוי כלשהו במועדי המרתון או במסלולים או לביטול מלא ו/או חלקי של המרתון וזאת עקב תנאי מזג אויר שיהיו צפויים לפני המרתון ו/או יתממשו בזמן קיום המרתון ואני מוותר על כל טענה בקשר לכך. אני החתום מטה מתחייב שלא אתבע תביעת נזיקין את הגופים שהוזכרו לעיל. •אני מסכים לכך שמטה המרתון וגורמי החסות של מרתון ירושלים, ועיריית ירושלים, רשאים להשתמש בתצלומים בהם אני מופיע במהלך המרתון, לפניו ובסיומו, לצרכי פרסום ויחסי ציבור וכן יהיו רשאים לשדר את המרתון בחלקו ו/או בשלמותו בכל מדיית שידור קיימת או שתהיה קיימת בעתיד (טלוויזיה, אינטרנט, סלולאר ו/או כל מדיה אחרת) , ללא תמורה</p>
            </div>
            <FormControlLabel style={{direction:"rtl",marginRight:"0%",marginBottom:"3%" }}
            control={
              <Checkbox 
              name="acceptTerms"
              value={values.acceptTerms}
              onChange={handelInpputChanges} 
                color="primary"
              />
            }
            label="מאשר מדיניות ותקנון"
          />
          <FormControlLabel  style={{direction:"rtl",marginBottom:"3%" }}
            control={
              <Checkbox 
                onChange={handelInpputChanges}
                value={values.receivingInformation}
                name="receivingInformation"
                color="primary"
              />
            }
            label="מאשר קבלת מידע ממרתון ירושלים ומעירית ירושלים"
          />
          <div style={{marginBottom:"5%"}}>
          <Button  variant="contained" color="primary" onClick={handleSubmit} >הבא</Button>    
          <Button  className={classes.backButton} onClick={props.changeDisplayFalseRulls}>הקודם</Button>
          </div>
        </TreeItem> 
      </TreeView>  
    );
  }
  
  const mapDispachToProps=(dispach)=>{
      return{
        user:dispach.deatailsRulls
      }
  }
  export default  connect(mapDispachToProps,{saveDeatailsRullsUser})(RulesAndPolicies);