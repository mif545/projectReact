
import React from 'react';
import Button from '@material-ui/core/Button';
import CardActionArea from "@material-ui/core/CardActionArea";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import {kinkMaratonSaved} from  "../../store/action";
import { ButtonGroup } from '@material-ui/core';
import DialogGroup from './DialogGroup';
import blue from './images/b.png';
import green from './images/g.png';
import yellow from './images/y.png';
import red from './images/r.png';
import purple from './images/p.png'
import './Kind.css'
function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}
//choose kind maraton 
const Kind = (props) => {
   

      const [open, setOpen] = React.useState(false);
      //open dialog if selected family race
      const handleClickOpen = () => {
        setOpen(true);
        
      };
      //close the dialog
      const handleClose = () => {
        setOpen(false);
      };
      
      //moove to next page and move forward with the stepper
      const handleContinue=()=>{
        props.handleNext();
        // props.runAStep(2);
        
      }    
      //sending the selected track to the redux
      const chooseKindMaraton=(kindMaraton)=>{
       
       props.kinkMaratonSaved(kindMaraton)
        props.handleNext()
      }
      //select num users selected choose family race
      const selectNumUsers=(e)=>{
        let price
        const num=e.target.value;
        switch(num){
          case(num>=2&&num<=4):{
            price=100
            break
          }
          case 5:{
            price=125
            break
          }
          default:{
            price=150 
          }
 
        }
        props.kinkMaratonSaved({length:'???????? ????????????',price:price,numUsers:num,sum:price*num})
      }

    return ( <div >
      <ButtonGroup>
        <DialogGroup />
     
      <Button variant="contained"style={{backgroundColor:"#000066",color:"white"}}>
        ?????????? ??????????
      </Button></ButtonGroup>
        <h3>???????????? ???????????? ?????????? ?????????????? ?? 10 ?????????? ???????????? ?? 29 ???????????????? 2020 ??????????</h3>
        <div className="mainDiv">
            <CardActionArea class="div1" >
                <h3>?????????? 42.195 ??"??</h3>
                <img src={blue} style={{width:"60%"}}/>
                <h4>280 ??? </h4>
                
                <Button onClick={()=>{chooseKindMaraton({length:'?????????? 42.195 ??"??',price:280,numUsers:1,sum:280})}}   style={{
                        backgroundColor: "#6495ED",
                        padding: "5% 8%",
                        fontSize: "90%",
                        // marginTop:"60%"
                    }} variant="contained" >???????? ??????????
                </Button> 
            </CardActionArea>
            <CardActionArea class="div2" >
            <h3>?????? ?????????? 21.1 ??"??</h3>
            <img src={red} style={{width:"60%"}}/>
            <h4>220 ???</h4>
           
            <Button  onClick={()=>{chooseKindMaraton({length:'?????? ?????????? 21.1 ??"??',price:220,numUsers:1,sum:220})}}  style={{
                        backgroundColor: "#cc0000",
                        padding: "5% 8%",
                        fontSize: "90%",
                    }} variant="contained" >???????? ??????????
                </Button>
            </CardActionArea>
            <CardActionArea class="div3" > 
                 <h3>??"?? 10</h3>
                 <img src={green} style={{width:"60%"}}/>
                 <h4>180 ??? </h4>
                 
                 <Button onClick={()=>{chooseKindMaraton({length:'??"?? 10',price:180,numUsers:1,sum:180})}} value={'??"?? 10'} style={{
                        backgroundColor: "#66bb6a",
                        padding: "5% 8%",
                        fontSize: "90%",
                    }} variant="contained" >???????? ??????????
                </Button>
            </CardActionArea>
            <CardActionArea class="div4">
                <h3>5 ??"??</h3>
                <img src={yellow} style={{width:"60%"}}/>
                <h4>110 ??? </h4>
                
                <Button  onClick={()=>{chooseKindMaraton({length:'5 ??"??',price:110,numUsers:1,sum:110})}} value={'5 ??"??'} style={{
                        backgroundColor: "#cc9900",
                        padding: "5% 8%",
                        fontSize: "90%",
                    }} variant="contained" >???????? ??????????
                </Button>
            </CardActionArea>
            <CardActionArea class="div5"  className="MuiGrid-root MuiGrid-item" > 
               <h3 fontSize="sans-serif">???????? ????????????</h3>
               <img src={purple} style={{width:"60%"}} />
               <div >
               <p> 2-4 ?????????????? 100  ???<br/>
                5 ?????????????? 125 ??? <br/>
               6 ?????????????? 150 ??? </p>
              
               </div>
              
         <Button variant="outlined" color="primary" value={'???????? ????????????'} onClick={handleClickOpen}  style={{
                        backgroundColor: "#9370D8",
                        padding: "5% 8%",
                        fontSize: "90%",
                        color:"black"
                        
                    }}
                    //  variant="contained"
                      >
         ???????? ??????????
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move',textAlign:"rtl" }} id="draggable-dialog-title">
        ???? ???????? ???? ???????? ?????? ???????????? ???????????? ????????
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{direction:"rtl" ,textAlign:"right"}}> 
          <p> 2-4 ?????????????? 100  ???</p>
          <p> 5 ?????????????? 125 ??? </p>
          <p>6 ?????????????? 150 ??? </p>
         
          </DialogContentText>
          <FormControl style={{direction:"rtl" ,textAlign:"right",width:"60%",marginLeft:"40%"}}>
        <InputLabel htmlFor="grouped-native-select">?????? ?????? ???????? ??????????????</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" onClick={selectNumUsers}>
          <option aria-label="None" value="" />
          <optgroup >
            <option value={1}>1 </option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </optgroup>
         
        </Select>
      </FormControl>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleContinue} color="primary">
            ????????
          </Button>
          <Button  onClick={handleClose} color="primary">
            ????????
          </Button>
        </DialogActions>
      </Dialog>
              </CardActionArea>
           
            </div>
  </div>
);
      
}
const mapDispachToProps=(dispach)=>{
  return {
    
  } ;
}
  export default connect(mapDispachToProps,{kinkMaratonSaved})( Kind);


