import { Button, Grid, makeStyles } from '@material-ui/core';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import TableArea from './TableArea';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles=makeStyles(theme=>({
    root:{
        margin:theme.spacing(5,0)
    },
    buttonStyling:{
        '& .MuiButton-root	':{
        margin:theme.spacing(1)}
    },
    button: {
      margin: theme.spacing(1),
    },
}))
const Home = () => {
  const data=[];
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
//   if(e.target.checked)
//   {
//     let arr=checkedbox;
//     arr.splice(1,0,id)
//     setCheckedBox(arr)
//   }
//   else
//   {
//     // let index=checkedbox.indexOf(id);
//     // console.log(index)
//     let items=checkedbox.filter(i=>i!==id);
    
//     // let items=checkedbox.splice(checkedbox.indexOf(id),1)
//    setCheckedBox(items)
//   }
//   console.log(checkedbox)
//  }
  const handleClose = () => {
    setOpen(false);
  };
    const classes=useStyles()
  
    const [dcloneData,setCloneData]=useState();
    
    const handleDeleteAll=(d) =>{
      
      
      const cloneData= data.filter(d=>d.isSelected===true)
      if(cloneData.length>0){
     
     
  }
    
    
        setOpen(false);
    }
    // console.log("CLONE DATA" , dcloneData)
    return ( 
        <Grid container className={classes.root}>
            {/*button  */}
            <Grid item xs={7} ></Grid>
            
            <Grid item xs={4}  style={{display:'flex',justifyContent:'flex-end' , alignContent:'flex-end'}}  className={classes.buttonStyling}>
                <Button  color="primary" variant="contained"> <Link to="/container" style={{textDecoration:'none' , color:'#fff'}}>Add</Link></Button>
                <div>
                <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={handleClickOpen}
      >
        Delete
      </Button>
                {/* <Button  color="primary" variant="contained" onClick={handleClickOpen}>Delete All</Button>
               */}
      <Dialog
        open={open}
        onClose={handleClose}
      
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>
          <DialogContentText  id="alert-dialog-description">
            Are you sure to delete 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleDeleteAll} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
            </Grid>
          <Grid item xs={1}></Grid>
            
            <Grid item xs={1}></Grid>
            <Grid item xs={10} >
             <TableArea/>
            </Grid>
            <Grid item xs={1}></Grid>

        </Grid>
     );
}
 
export default Home;