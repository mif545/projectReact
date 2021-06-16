import TextField from '@material-ui/core/TextField';
import AmountTable from './AmountTable';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import axios from'axios'
import DialogFinish from './DialogFinish';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));
const Payment = (props) => {
    const classes = useStyles();
    let [numCard,setNumCard]=useState();
    let [cardValidityYear,setCardValidityYear]=useState();
    let [cardValidityMonth,setCardValidityMonth]=useState();
    let [lastNumbers,setLastNumbers]=useState();
    let [id,setId]=useState();
    let [name,setName]=useState();
    
        //create arr for years
        const options = [];
        let obj = {}
        for(var i = 2021; i < 2040; i++) {
           obj = {};
    
          obj['value'] = i;
          obj['label'] = i;
          options.push(obj);
        }
        //create arr for month
        const options2 = [];
        let obj1 = {}
        for(var j = 1; j <12; j++) {
           obj1 = {};
      
            obj1['value'] = j;
            obj1['label'] = j;
            options2.push(obj1);
          }
   

    //change values when inserted values
    const handleInputChange=(e) =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
       
        switch (name){
          case("numCard"):{
            setNumCard(value);
            
            break;
          }
          case("cardValidityYear"):{
            setCardValidityYear(value);
            break;
          }
          case("cardValidityMonth"):{
            setCardValidityMonth(value);
            break;
          }
          case("lastNumbers"):{
            setLastNumbers(value);
            break;
          }
          case("id"):{
           setId(value)
            break;
          }
          default:{
            setName(value);
           
          }
        }
     
      }
     //send deatails for payment
      const paymentUser=()=>{
        const deatailsPayment={"numCard":numCard,
                               "cardValidityYear":cardValidityYear,
                               "cardValidityMonth":cardValidityMonth,
                               "lastNumbers":lastNumbers,
                               "idPays":id,
                               "namePays":name
                            };
        //בreate a user that contains all the details                   
       let newUser={"id":props.idUser,
                     "country":props.country,
                     "kindMaraton":props.kindMaraton,
                     "deatailsUser":props.deatailsUser,
                     "deatailsMaratonUser":props.deatailsMaratonUser,
                     "deatailsRulls":props.deatailsRulls,
                     "deatailsPayment":deatailsPayment
                    }

        //  axios.post(`http://localhost:9000/addUser/`,newUser)
        //  .then((response)=>{
        //    response.json().then((result)=>{
        //      console.warn('result',result);
            
        //      localStorage.setItem('register',JSON.stringify(
        //        {
        //          register:true,
        //          token:result.to
        //        }
        //      ))
        //    })
        //    .catch(err=>{
        //     console.log(err);
        //    })
        //    let store=JSON.parse(localStorage.getItem('register'))
        //  })

         //and send to the server   
        axios
        .post(`http://localhost:9000/addUser/`,{newUser} )
        .then(() => console.log('add user'))
        .catch(err => {
         console.error(err);
         });         
      
      }
    return (<>
    <h1>הכנס פרטי אשראי</h1>
    <AmountTable />
   
    <div style={{marginBottom:"1%",marginTop:"1%"}}>
    <p style={{float:"right",marginRight:"10%"}}>:מספר כרטיס</p>
    <TextField
           name="numCard"
          value={numCard}
          onChange={handleInputChange}
          style={{marginLeft:"55%"}}
          className={classes.textField}
          margin="dense"
          variant="outlined"
        />
    </div>
    <div style={{marginBottom:"1%",marginTop:"1%"}}>
    <p style={{float:"right",marginRight:"10%"}}>:תוקף כרטיס</p>
    <FormControl  style={{marginRight:"6%",marginLeft:"2%",float:"right"}} variant="outlined" className={classes.formControl}>
        <Select
         name="cardValidityYear"
         value={cardValidityYear}
         onChange={handleInputChange}
          native 
        >
          <option aria-label="None" value="" />
          {options.map(op=>{
              return  <option key={op.value} value={op.valoe}>{op.value}</option>
          })}
        </Select>
      </FormControl>
      <FormControl  style={{marginLeft:"63%"}}  variant="outlined" className={classes.formControl}>
        <Select
        name="cardValidityMonth"
        value={cardValidityMonth}
        onChange={handleInputChange}
          native 
        >
          <option aria-label="None"  />
          {options2.map(op=>{ 
              return  <option key={op.value} value={op.value}>{op.value}</option>
          })}
        </Select>
      </FormControl>
    </div>
    <div style={{marginBottom:"1%",marginTop:"1%"}}>
    <p style={{float:"right",marginRight:"10%"}}>:3 ספרות בגב הכרטיס</p>
    <TextField
          name="lastNumbers"
          value={lastNumbers}
          onChange={handleInputChange}
          style={{marginLeft:"60%"}}
          className={classes.textField}
          margin="dense"
          variant="outlined"
        />
    </div>
    <div style={{marginBottom:"1%",marginTop:"1%"}}>
    <p style={{float:"right",marginRight:"10%"}}>:ת"ז בעל הכרטיס</p>
    <TextField
          name="id"
          value={id} 
          onChange={handleInputChange}
          style={{marginLeft:"57%"}}
          className={classes.textField}
          margin="dense"
          variant="outlined"
        />
    </div>
    <div style={{marginBottom:"1%",marginTop:"1%"}}>
    <p style={{float:"right",marginRight:"10%"}}>:שם בעל הכרטיס</p>
    <TextField
          name="name"
          value={name} 
          onChange={handleInputChange}
          style={{marginLeft:"57%"}}
          className={classes.textField}
          margin="dense"
          variant="outlined"
        />
    </div>
    <div>
    {/* <Button onClick={PaymentUser} style={{marginLeft:"38%",padding:"1% 4%",backgroundColor:"#3f51b5",color:"white"}}>בצע</Button> */}
    <DialogFinish paymentUser={paymentUser}/>
    </div>
    </>  );
}
 const mapDispachToProps=(dispach)=>{
     return{
    country:dispach.countryUser,
    idUser:dispach.IdUser,
    kindMaraton:dispach.kindMaraton,
    deatailsUser:dispach.deatailsUser,
    deatailsMaratonUser:dispach.deatailsMaratonUser,
    deatailsRulls:dispach.deatailsRulls,
     }
 }
export default connect(mapDispachToProps)(Payment);