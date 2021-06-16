import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import {runAStep} from '../store/action';
import Routers from './Routers';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['מדינה', 'סוג מרוץ', 'פרטים','תשלום'];
 
}



 function CustomizedSteppers(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  
  //moove to next page and move forward with the stepper
  const handleNext = () => {
    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const step=activeStep+1;
    props.runAStep(step);
    console.log(activeStep)
   
  };
//moove to previous page and move forward with the stepper
  const handleBack = () => {
    
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const step=activeStep-1;
    props.runAStep(step);
  };
//Back to the first step
  const handleReset = () => {
    props.runAStep(0);
    setActiveStep(0);
  };
 
  
  return (
    
    <div className={classes.root} dir="ltr">
      
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div >
      <Routers activeStep={activeStep} handleBack={handleBack} handleNext={handleNext}/>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div style={{marginTop:"3%"}}>
          
            {activeStep===2?null:(<div >
            <Button 
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.backButton}
            >
              {activeStep ===0 ? null : 'חזור'}
            </Button>
            {activeStep===1?null:(<Button  variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'סיום' : 'הבא'}
            </Button>)}
            
          </div>)}
          
          </div>
        )}
        
      </div>
      
  
    </div>
  );
}
const mapDispachToProps=(dispach)=>{
  return {
     level:dispach.runStep
  } ;
}
export default connect(mapDispachToProps,{runAStep})(CustomizedSteppers) ;