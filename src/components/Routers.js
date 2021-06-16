
import FormCountry from "./form1/FormCountry";
import Kind from "./form2/Kind";
import "./App.css"
import Form3 from "./form3/Form3";
import Payment from "./form4/Payment";

const Routers = (props) => {
    return (<>
    {props.activeStep === 0 ? (
        <FormCountry />
        // <Redirect to="country"/>
       ) : (
        props.activeStep === 1 ? (
          <Kind handleNext={props.handleNext}/>
        // <Redirect to="kindMaraton" handleNext={props.handleNext}/>
           ) : (
            props.activeStep === 2 ? (
                <Form3 handleNext={props.handleNext} handleBack={props.handleBack} />
                // <Redirect to="form3"/>
                 ) : (
                  <Payment handleBack={props.handleBack}/>
               // <Redirect to="payment"/>
                 )
           )
       )}</>)
}
 
export default Routers;
