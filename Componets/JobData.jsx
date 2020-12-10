import React, { useEffect,useState } from 'react';
import {Grid,Button,makeStyles,TableContainer,TableRow,Table,TableHead,Paper, TableCell} from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
const useStyle=makeStyles(theme=>({
    root:{
        
        borderColor:'red',
        borderWidth:'2px',
        
        marginTop:theme.spacing(3)
    },
    paperPadding:{
        padding:theme.spacing(2),
        borderColor:theme.palette.primary.main
    }
})
    
    )
const JobData = (props) => {
  const [user,setUser]=useState([])
  const {id}=useParams()
  const classes=useStyle()
  useEffect(()=>{
    fetchUser()
   
   
  },[])

 const fetchUser = async () =>{
   const record = await axios.get(`http://localhost:3006/data/${id}`)
  
   setUser(record.data)
 }
    return ( 
     
        <Grid container  spacing={2} className={classes.root} alignItems="center">
         <Grid>
         </Grid>
        <Grid item xs={12}>
          <Link style={{textDecoration:'none'}} to={`/edit/${id}`}>
          <Button variant="contained" color="primary">
  Edit
</Button>
          </Link>
          </Grid>
         <Grid item xs={6}>
         <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Job Title</TableCell>
    <TableCell align="right">{user.JobTitle}</TableCell>
       
          </TableRow>
          <TableRow>
            <TableCell>Repeat</TableCell>
    <TableCell align="right">{user.repeat}</TableCell>
       
          </TableRow>
          <TableRow>
            <TableCell>Start</TableCell>
    <TableCell align="right">{user.start}</TableCell>
       
          </TableRow>
          <TableRow>
            <TableCell>Type</TableCell>
    <TableCell align="right">{user.type}</TableCell>
       
          </TableRow>
          <TableRow>
            <TableCell>language</TableCell>
    <TableCell align="right">{user.language}</TableCell>
       
          </TableRow>
          <TableRow>
            <TableCell>Source</TableCell>
    <TableCell align="right">{user.source}</TableCell>
       
          </TableRow>
          <TableRow>
            <TableCell>Page Size</TableCell>
    <TableCell align="right">{user.pagesize}</TableCell>
       
          </TableRow>
          <TableRow>
            <TableCell>QInTitle</TableCell>
    <TableCell align="right">{user.qintitle}</TableCell>
       
          </TableRow>
          <TableRow>
            <TableCell>Exclude Domain</TableCell>
    <TableCell align="right">{user.excludedomains}</TableCell>
       
          </TableRow>
          <TableRow>
            <TableCell>To</TableCell>
    <TableCell align="right">{user.to}</TableCell>
       
          </TableRow>
          <TableRow>
            <TableCell>Api Key</TableCell>
    <TableCell align="right">{user.apikey}</TableCell>
       
          </TableRow>
          
        </TableHead>
       
      </Table>
    </TableContainer>
         </Grid>
         <Grid item xs={6}>
         <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Job Frequence</TableCell>
    <TableCell align="right">{user.JobFrequency}</TableCell>
            
          </TableRow>
          <TableRow>
            <TableCell>at</TableCell>
    <TableCell align="right">{user.at}</TableCell>
            
          </TableRow>
          <TableRow>
            <TableCell>Stop</TableCell>
    <TableCell align="right">{user.end}</TableCell>
            
          </TableRow>
          <TableRow>
            <TableCell>Category</TableCell>
    <TableCell align="right">{user.category}</TableCell>
            
          </TableRow>
          <TableRow>
            <TableCell>Country</TableCell>
    <TableCell align="right">{user.country}</TableCell>
            
          </TableRow>
          <TableRow>
            <TableCell>Q</TableCell>
    <TableCell align="right">{user.q}</TableCell>
            
          </TableRow>
          <TableRow>
            <TableCell>Category</TableCell>
    <TableCell align="right">{user.category}</TableCell>
            
          </TableRow>
   
          <TableRow>
            <TableCell>Domains</TableCell>
    <TableCell align="right">{user.domains}</TableCell>
            
          </TableRow>
          <TableRow>
            <TableCell>From</TableCell>
    <TableCell align="right">{user.from}</TableCell>
            
          </TableRow>
          <TableRow>
            <TableCell>Sort By</TableCell>
    <TableCell align="right">{user.sortby}</TableCell>
            
          </TableRow>
          <TableRow>
            <TableCell style={{color:user.toggle?'#4caf50':'#f44336'}}>Opertation</TableCell>
    <TableCell align="right"  style={{color:user.toggle?'#4caf50':'#f44336'}}>{user.toggle?"Start":"Stop"}</TableCell>
            
          </TableRow>

        </TableHead>
       
      </Table>
    </TableContainer>
         </Grid>
        </Grid>
     );
}
 
export default  (JobData) ;