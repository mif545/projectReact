import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
 //
 const ShirtSize=(props)=>{
   const arr=[]
   for(let i=0;i<props.num;i++){
     arr[i]=i
   }
  return (<div>
  {arr.map(item=>{
   return <FormControl  key={item} component="fieldset" style={{marginLeft:"55%"}}>
   <FormLabel component="legend" >מידת חולצה</FormLabel>
   <RadioGroup  aria-label="gender" name="shirtSize"  onChange={props.handleInputChange} style={{ display: 'flex', flexDirection: 'row'}}>
     <FormControlLabel  value="XS" control={<Radio />} label="XS" />
     <FormControlLabel value="S"   control={<Radio />} label="S" />
     <FormControlLabel  value="M" control={<Radio />} label="M" />
     <FormControlLabel value="L"   control={<Radio />} label="L" />
     <FormControlLabel value="XL"   control={<Radio />} label="XL" />
     <FormControlLabel value="XXL"   control={<Radio />} label="XXL" />
   </RadioGroup>
 </FormControl>
  })}
    
    </div>);
}

export default  ShirtSize;