import React from "react";
import { CountryDropdown } from 'react-country-region-selector';
import {countryUserSaved} from  "../../store/action"


import { connect } from "react-redux";
//choose country
 class Country extends React.Component {
    constructor (props) {
      super(props);
      this.state = { country: this.props.theCountry};
    }
   
    selectCountry (val) {
      const country1=val;
      console.log(country1);
      this.props.countryUserSaved(country1);
      this.setState({country: val});     
    }
    selectRegion (val) {
      this.setState({ region: val });
    }
   
    handleSubmit = () => {
     
      console.log(this.state.country);
  }
    render () {
      const { country} = this.state;
      return (
        <div>
          <h1>please select your country</h1>
          <CountryDropdown
            value={country}
            name="country"
            onChange={(val) => this.selectCountry(val)} 
            />
        </div>
      );
    }
  }
  const mapDispachToProps=(dispach)=>{
    return{
      theCountry:dispach.countryUser
    }
  }
  export default connect(mapDispachToProps,{countryUserSaved})(Country);

<script src="https://gist.github.com/hemang249/284ea8e2ff50c39516b831379e2e561f.js"></script>
