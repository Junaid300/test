import { TextField,Grid, makeStyles, Button } from '@material-ui/core';
import React ,{useEffect, useState} from 'react';

import { ReUseForm } from '../ReUsable';
import { getRepeat,getAt,getType,getCategory, getCountry, getLanguage } from '../ServiceProvider/services';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import SlectCompo from '../SlectCompo';
import TimePikerCompo from '../TimePikerCompo';
import { Link } from 'react-router-dom';
import {getID} from '../ServiceProvider/GenerateID';
import {useFormik} from 'formik';
import { useStateValue } from '../../StateProvider/StateProvider';
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

const initialValues={
   
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
    const [{isdata},dispatch]=useStateValue()
    let history=useHistory()
    const [input,setInput]=useState()
const formik = useFormik({
    initialValues,
    onSubmit:values=>{
        console.log("WHEN I AM CALLING")
        const id=getID();
        console.log(id)
        
        addData(id,values)
        dispatch({
            type:'DataFetched',
            item:isdata+1
        })  
        history.push('/')
       
    },

})
    // const {input,setInput , handleChange} = ReUseForm(initialData)
     const classes=useStyle()
  
   

const addData =async (id,record)=>{
    console.log("Record" , id , record)
    await axios.post(`http://localhost:9000/add`,{record , id})
    
}
    return ( 
        <form  >
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={10}>
                <TextField variant="outlined" value={formik.values.JobTitle} name="JobTitle" onChange={formik.handleChange} label="Job Title" fullWidth size="small"/>
                </Grid>
                <Grid item xs={10} >
                <TextField variant="outlined"  value={formik.values.JobFrequency} name="JobFrequency" onChange={formik.handleChange} label="Job Frequency" fullWidth size="small"/>
                  
                </Grid>
                <Grid item xs={12}>
                <SlectCompo name="repeat"
                onChange={formik.handleChange}
                className={classes.selectfield} name="repeat" label="Repeat" MenuProps={MenuProps} values={formik.values.repeat}
                options={getRepeat}
                />
               <SlectCompo name="at"
                onChange={formik.handleChange}
                className={classes.selectfield}  label="At" MenuProps={MenuProps} values={formik.values.at}
                options={getAt}
                />
                </Grid>
                <Grid item xs={12}>
                    <TimePikerCompo onChange={formik.handleChange} value={formik.values.start} name="start" className={classes.datePiker} label="Start"/>
                    <TimePikerCompo onChange={formik.handleChange} value={formik.values.end} name="end" className={classes.datePiker} label="End"/>
                </Grid>
                <Grid item xs={12}>
                <SlectCompo name="type"
                onChange={formik.handleChange}
                className={classes.selectfield} name="type" label="Type" MenuProps={MenuProps} values={formik.values.type}
                options={getType}
                />
               <SlectCompo name="category" 
                onChange={formik.handleChange}
                className={classes.selectfield}  label="Category" MenuProps={MenuProps} values={formik.values.category}
                options={getCategory}
               
                />
                </Grid>
                <Grid item xs={12} >
                <SlectCompo name="language" 
                onChange={formik.handleChange}
                className={classes.selectfield}  label="Language" MenuProps={MenuProps} values={formik.values.language}
                options={getLanguage}
               
                />
                  <SlectCompo name="country" 
                onChange={formik.handleChange}
                className={classes.selectfield}  label="Country" MenuProps={MenuProps} values={formik.values.country}
                options={getCountry}
               
                />
                </Grid>
                <Grid item xs={12} >
                <TextField variant="outlined" value={formik.values.source} className={classes.selectfield} name="source" onChange={formik.handleChange} label="Source"  size="small"/>
                <TextField variant="outlined" value={formik.values.q}  className={classes.selectfield} name="q" onChange={formik.handleChange} label="q"  size="small"/>
                </Grid>
                <Grid item xs={12} >
                <TextField variant="outlined" value={formik.values.pagesize} className={classes.selectfield} name="pagesize" onChange={formik.handleChange} label="Page Size"  size="small"/>
                <TextField variant="outlined" value={formik.values.page} className={classes.selectfield} name="page" onChange={formik.handleChange} label="Page"  size="small"/>
                </Grid>
                <Grid item xs={12} >
                <TextField variant="outlined" value={formik.values.qintitle} className={classes.selectfield} name="qintitle" onChange={formik.handleChange} label="QInTitle"  size="small"/>
                <TextField variant="outlined" value={formik.values.domains} className={classes.selectfield} name="domains" onChange={formik.handleChange} label="Domains"  size="small"/>
                </Grid>
                <Grid item xs={12} >
                <TextField variant="outlined" value={formik.values.excludedomains} className={classes.selectfield} name="excludedomains" onChange={formik.handleChange} label="Exclude Domains"  size="small"/>
                <TextField variant="outlined" value={formik.values.from} className={classes.selectfield} name="from" onChange={formik.handleChange} label="From"  size="small"/>
                </Grid>
                <Grid item xs={12} >
                <TextField variant="outlined" value={formik.values.to} className={classes.selectfield} name="to" onChange={formik.handleChange} label="To"  size="small"/>
                <TextField variant="outlined" value={formik.values.sortby} className={classes.selectfield} name="sortby" onChange={formik.handleChange} label="Sort By"  size="small"/>
                </Grid>
                <Grid item xs={12} >
                <TextField variant="outlined" value={formik.values.apikey} className={classes.selectfield} name="apikey" onChange={formik.handleChange} label="Api Key"  size="small"/>
                <TextField variant="outlined" value={formik.values.sortby} className={classes.selectfield} name="sortby" onChange={formik.handleChange} label="Sort By"  size="small"/>
                </Grid>
                <Grid item  container justify="center" >
               
                   
                <Button 
               onClick={formik.handleSubmit}
                variant="contained" color="primary" >
                
                    Submit
                   
                    </Button>
                
                </Grid>
            </Grid>
        </form>
     );
}
 
export default NewText;