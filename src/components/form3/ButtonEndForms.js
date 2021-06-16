import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles();

 
 
const ButtonEndForms = (props) => {
    const classes = useStyles();
    return ( <div style={{marginBottom:"5%",marginTop:"3%"}}>
             <Button variant="contained" color="primary" onClick={props.changeDisplayMaraton} >הבא</Button>    
             <Button className={classes.backButton} onClick={props.handleBack}>חזור</Button>
            </div>  );
}
 
export default ButtonEndForms;