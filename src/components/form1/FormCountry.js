import Country from "./Country";
import ResetIdForm from "./ResetIdForm";


//form whith country and id
const FormCountry = (props) => {
    return ( <form  style={{direction:"rtl",border:"1 solid black",width:"60%",padding:"5%",marginLeft:"15%",marginRight:"10%",backgroundColor:"background.paper",boxShadow:"rgb(230 230 230) -1px 2px 3px 3px"}} noValidate autoComplete="off">
            <Country  />
            <ResetIdForm />
          
          </form > );
}


export default FormCountry;