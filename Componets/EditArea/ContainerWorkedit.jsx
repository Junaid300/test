import { Grid } from '@material-ui/core';
import React from 'react';
import EditData from './EditData';


const ContainerEditWork = () => {
    return ( 
       <Grid container direction="column">
            
            <Grid item container >
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <EditData/>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
           
       </Grid>
     );
}
 
export default ContainerEditWork;