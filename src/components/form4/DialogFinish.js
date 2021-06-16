import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

 const DialogFinish=(props)=> {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
    props.paymentUser()
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary"  style={{marginLeft:"38%",padding:"1% 4%",backgroundColor:"#3f51b5",color:"white"}} onClick={handleClickOpen}>
       בצע
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
      
        <DialogContent>
          <DialogContentText style={{direction:"rtl"}}>
          הנתונים נשמרו בהצלחה
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            סגור
          </Button>
          </DialogActions>
      </Dialog>
    </div>
  );
}
export default DialogFinish;