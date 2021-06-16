
import './App.css';
import FormCountry from './form1/FormCountry';
import Kind from './form2/Kind';
import CustomizedSteppers from './CustomizedSteppers';
import {Switch,Route} from 'react-router-dom'
import Form3 from './form3/Form3';


function App(props) {
  return ( <div className="App">
     <CustomizedSteppers/>
    
  <Switch>
       <Route path="/country">
        <FormCountry/>
      </Route>
      <Route path="/kindMaraton">
          <Kind/>
      </Route>
      <Route path="/form3">
          <Form3/>
      </Route>
 </Switch>


 </div> );
  
  
}

export default App;
