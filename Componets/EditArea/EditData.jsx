import { TextField,Grid, makeStyles, Button } from '@material-ui/core';
import React ,{useEffect, useState} from 'react';

import { ReUseForm } from '../ReUsable';
import { getRepeat,getAt,getType,getCategory, getCountry, getLanguage } from '../ServiceProvider/services';
import axios from 'axios';
import SlectCompo from '../SlectCompo';
import TimePikerCompo from '../TimePikerCompo';
import { Link } from 'react-router-dom';
import {getID} from '../ServiceProvider/GenerateID'
import {useParams} from 'react-router-dom'
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const initialData={
    isSelected:"",
JobTitle:"",
JobFrequency:"",
repeat:"",
at:"",
start:"",
end:"",
type:"",
category:"",
language:"",
country:"",
source:"",
q:"",
pagesize:"",
page:"",
qintitle:"",
domains:"",
excludedomains:"",
from:"",
to:"",
sortby:"",
apikey:"",
operation:"",
}
const useStyle=makeStyles(theme=>({
    root:{
        margin:theme.spacing(1),
    },
    textfield:{

        marginRight:theme.spacing(1)
    },
    selectfield:{
        marginRight:theme.spacing(1),
        width:'35ch',
   
    },
    
    datePiker:{
      
        marginRight:theme.spacing(1),
        width:'35ch'  
      }
   
}
))
const NewText = () => {
  const {id} = useParams()
    const {input,setInput , handleChange} = ReUseForm(initialData)
    const classes=useStyle()
  
   
    const handleData = () =>{
        UpDateData()


        
}

const UpDateData =async ()=>{
   const record = await axios.post(`http://localhost:3006/update/${id}` ,{record:input})
 
}

useEffect(()=>{
    editUserData()
},[])
const editUserData =async ()=>{
   const record = await axios.get(`http://localhost:3006/edit/${id}`)
    setInput(record.data)
}
    return ( 
        <form onSubmit={(event)=>{event.preventDefault()}}>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={10}>
                <TextField variant="outlined" value={input.JobTitle} name="JobTitle" onChange={handleChange} label="Job Title" fullWidth size="small"/>
                </Grid>
                <Grid item xs={10} >
                <TextField variant="outlined" value={input.JobFrequency} name="JobFrequency" onChange={handleChange} label="Job Frequency" fullWidth size="small"/>
                  
                </Grid>
                <Grid item xs={12}>
                <SlectCompo name="repeat"
                onChange={handleChange}
                className={classes.selectfield} name="repeat" label="Repeat" MenuProps={MenuProps} values={input.repeat}
                options={getRepeat}
                />
               <SlectCompo name="at"
                onChange={handleChange}
                className={classes.selectfield}  label="At" MenuProps={MenuProps} values={input.at}
                options={getAt}
                />
                </Grid>
                <Grid item xs={12}>
                    <TimePikerCompo onChange={handleChange} value={input.start} name="start" className={classes.datePiker} label="Start"/>
                    <TimePikerCompo onChange={handleChange} value={input.end} name="end" className={classes.datePiker} label="End"/>
                </Grid>
                <Grid item xs={12}>
                <SlectCompo name="type"
                onChange={handleChange}
                className={classes.selectfield} name="type" label="Type" MenuProps={MenuProps} values={input.type}
                options={getType}
                />
               <SlectCompo name="category" 
                onChange={handleChange}
                className={classes.selectfield}  label="Category" MenuProps={MenuProps} values={input.category}
                options={getCategory}
               
                />
                </Grid>
                <Grid item xs={12} >
                <SlectCompo name="language" 
                onChange={handleChange}
                className={classes.selectfield}  label="Language" MenuProps={MenuProps} values={input.language}
                options={getLanguage}
               
                />
                  <SlectCompo name="country" 
                onChange={handleChange}
                className={classes.selectfield}  label="Country" MenuProps={MenuProps} values={input.country}
                options={getCountry}
               
                />
                </Grid>
                <Grid item xs={12} >
                <TextField variant="outlined" value={input.source} className={classes.selectfield} name="source" onChange={handleChange} label="Source"  size="small"/>
                <TextField variant="outlined" value={input.q}  className={classes.selectfield} name="q" onChange={handleChange} label="q"  size="small"/>
                </Grid>
                <Grid item xs={12} >
                <TextField variant="outlined" value={input.pagesize} className={classes.selectfield} name="pagesize" onChange={handleChange} label="Page Size"  size="small"/>
                <TextField variant="outlined" value={input.page} className={classes.selectfield} name="page" onChange={handleChange} label="Page"  size="small"/>
                </Grid>
                <Grid item xs={12} >
                <TextField variant="outlined" value={input.qintitle} className={classes.selectfield} name="qintitle" onChange={handleChange} label="QInTitle"  size="small"/>
                <TextField variant="outlined" value={input.domains} className={classes.selectfield} name="domains" onChange={handleChange} label="Domains"  size="small"/>
                </Grid>
                <Grid item xs={12} >
                <TextField variant="outlined" value={input.excludedomains} className={classes.selectfield} name="excludedomains" onChange={handleChange} label="Exclude Domains"  size="small"/>
                <TextField variant="outlined" value={input.from} className={classes.selectfield} name="from" onChange={handleChange} label="From"  size="small"/>
                </Grid>
                <Grid item xs={12} >
                <TextField variant="outlined" value={input.to} className={classes.selectfield} name="to" onChange={handleChange} label="To"  size="small"/>
                <TextField variant="outlined" value={input.sortby} className={classes.selectfield} name="sortby" onChange={handleChange} label="Sort By"  size="small"/>
                </Grid>
                <Grid item xs={12} >
                <TextField variant="outlined" value={input.apikey} className={classes.selectfield} name="apikey" onChange={handleChange} label="Api Key"  size="small"/>
                <TextField variant="outlined" value={input.sortby} className={classes.selectfield} name="sortby" onChange={handleChange} label="Sort By"  size="small"/>
                </Grid>
                <Grid item  container justify="center" >
                <Button 
                disabled={input.JobTitle==="" }
                variant="contained" color="primary" onClick={handleData}>
                    <Link to="/" style={{color:'#fff' , textDecoration:'none'}}>
                    Submit
                    </Link>
                    </Button>
                </Grid>
            </Grid>
        </form>
     );
}
 
export default NewText;