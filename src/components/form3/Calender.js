import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
//choose birthdate
const  Calender=(props)=> {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField  style={{width:"73%",direction:"rtl",marginBottom:"3%",marginRight:"9%",float:"left",fontSize:"30"}}
        id="datetime-local"
        label="תאריך לידה*"
        type="datetime-local"
         defaultValue="2021-05-24T10:30"
        name="dateOfBirth"
        value={props.date}
        onChange={props.handleInputChange}
        className={classes.textField}
        InputLabelProps={{
        shrink: true,
        }}
      />
    </form>
  );
}
export default Calender;