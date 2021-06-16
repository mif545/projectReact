import DeatailsMaraton from "./DeatailsMaraton";
import Deatails from "./DeatailsUser";
import RulesAndPolicies from "./RulesAndPolicies";
import { useState } from "react";

import SelectedTrack from "./TrackDescription/SelectedTrack";

const Form3 = (props) => {
    let [dispalyMaraton,setsMaraton]=useState(false);
    let [dispalyRulls,setsRulls]=useState(false);

    //show from deatails maraton
    const changeDisplayMaraton=()=>{
     setsMaraton(true)
    }
    //show form deatails rulls
    const changeDisplayRulls=()=>{
      setsRulls(true)
    } 
    //hide form deatails maraton
    const changeDisplayFalseMaraton=()=>{
       setsMaraton(false)
       setsRulls(false)
    }
    //hide form deatails rulls
     const changeDisplayFalseRulls=()=>{
       setsRulls(false) 
       console.log("hh");
    }
      
    return ( <> 
         <SelectedTrack/>
         <Deatails   changeDisplayMaraton={changeDisplayMaraton} handleBack={props.handleBack}/> 
         {dispalyMaraton&&<DeatailsMaraton changeDisplayRulls={changeDisplayRulls} changeDisplayFalseMaraton={changeDisplayFalseMaraton} />}
         {dispalyRulls&& <RulesAndPolicies  changeDisplayFalseRulls={changeDisplayFalseRulls} handleNext={props.handleNext}/>}
         </>);
}
 
export default Form3;