import React from 'react';
import {Grid} from '@material-ui/core';
import JobData from './JobData';
import {useParams} from 'react-router-dom';
const DisplayData = (props) => {
    const {id}=useParams()
    console.log("MAIN ID " , id)
    return ( 
        <Grid container direction="column">
            
            <Grid item container >
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <JobData/>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
           
       </Grid>
     );
}
 
export default DisplayData;