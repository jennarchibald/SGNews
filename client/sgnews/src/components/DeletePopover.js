import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './DeletePopover.css'

const useStyles = makeStyles(theme => ({
 typography: {
   padding: theme.spacing(2),
 },
}));

function SimplePopover(props) {
 const classes = useStyles();
 const [anchorEl, setAnchorEl] = React.useState(null);

 function handleClick(event) {
   setAnchorEl(event.currentTarget);
 }

 function handleClose() {
   setAnchorEl(null);
 }

 const open = Boolean(anchorEl);
 const id = open ? 'simple-popover' : null;

 return (
   <div>
     <Button aria-describedby={id} variant="contained" onClick={handleClick}>
       Delete
     </Button>
     <div className = "popover-wrapper">
     <Popover
       id={id}
       open={open}
       anchorEl={anchorEl}
       onClose={handleClose}
       anchorOrigin={{
         vertical: 'bottom',
         horizontal: 'center',
       }}
       transformOrigin={{
         vertical: 'top',
         horizontal: 'center',
       }}
     >
       <div className="delete-popover-container">
         <div className="delete-popover-text-contain">
         Are you sure you'd like to delete?
         </div>
       <Typography className={classes.typography}>
         <button
         className = "delete-confirm-button"
         onClick={props.onDelete}>Delete</button>
       </Typography>
       </div>
     </Popover>
     </div>
   </div>
 );
}

export default SimplePopover;
