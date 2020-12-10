import { TableContainer,Table,TableHead,TableRow,TableCell,TableBody, Button, Checkbox } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import { useStateValue } from '../StateProvider/StateProvider';

const TableArea = () => {
const [add,dispatcher]=useStateValue()
const [data,dispatch]=useStateValue()

const [{isdata}]=useStateValue()
  const [isFetching, setFetching] = useState(false);
    const [open, setOpen] = React.useState(false);
  const [checkedbox , setCheckedBox] = useState([])
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    

    // const [editMode,setEditmode]=useState(false)
    let [userData,setUserData]=useState([])
    const handleDelete=(d) =>{
    
      DeleteUser(d)

      
    }
    const DeleteUser=async (id) =>{
     
    const deleting=  await axios.post(`http://localhost:9000/delete/${id}`)
     
   
    }
    const handleDetail =(d) =>{
        
    }
   
   const handleChange =(e,id) =>{
    console.log(e.target.checked)
    
}

useEffect(()=>{
  
  fetchAllUser()

},[]
)

const fetchAllUser=async () =>{
  console.log("FETCHING")
  setFetching(true);
  const records=await axios.get('http://localhost:9000')
  setUserData(records.data)
  setFetching(false);
 
}

    const handleToggle=(d)=>{
        
      
        console.log("clickd",d)
        
        
    }
    if(isFetching){
      
      return <div>Data Loading.....</div>
    }
    return ( 
       <TableContainer>
           <Table >
               <TableHead style={{backgroundColor:'#3474ba' }}>
                   <TableRow>
                       <TableCell ></TableCell>
                       <TableCell style={{color:'white'}}>No.</TableCell>
                       <TableCell style={{color:'white'}}>Job Title</TableCell>
                  
                       <TableCell style={{color:'white'}}>Start Time</TableCell>
                       <TableCell style={{color:'white'}}>End Time</TableCell>
                       <TableCell ></TableCell>
                       <TableCell ></TableCell>
                       <TableCell ></TableCell>
                       <TableCell ></TableCell>
                       
                   </TableRow>
               </TableHead>
               <TableBody>
                   
                      {userData?.map((d,index)=> 
                        <TableRow key={d.id}>
                            
                            <TableCell>
                            <Checkbox 
                           
                          checked={d.isSelected}
                        value={d._id}
                      onChange={(e)=>handleChange(e,d.id)}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
                            </TableCell>
                            <TableCell>{index+1}</TableCell>
                            <TableCell>{d.JobTitle}</TableCell>
                            <TableCell>{d.start}</TableCell>
                            <TableCell>{d.end}</TableCell>
                            <TableCell>
                            {d.operation?<ToggleOnIcon onClick={()=>handleToggle(d)} color="primary" fontSize="large"/>:<ToggleOffIcon color="action"  onClick={()=>handleToggle(d)} fontSize="large"/>}
                            </TableCell>
                            <TableCell>
                                {/* <DeleteIcon color="primary" style={{cursor:'pointer'}} onClick={()=>handleDelete(d._id)}/> */}
                                <div>
      <DeleteIcon variant="outlined" color="secondary" style={{cursor:'pointer'}} onClick={()=>handleDelete(d.id)}/>
     
    </div>
                            </TableCell>
                            <TableCell>
                            <Link to={`edit/${d._id}`}>    <EditIcon  color="primary"/> </Link>
                            </TableCell>
                            <TableCell>
                                <Button color="primary" onClick={()=>handleDetail(d)} variant="outlined"> 
                                <Link to={`data/${d._id}`} style={{textDecoration:'none',color:'#3474ba'}}>Details</Link></Button>
                            </TableCell>
                        </TableRow>
                        )}
                   
               </TableBody>
           </Table>
       </TableContainer>
     );
}
 
export default TableArea;