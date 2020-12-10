import { Grid } from '@material-ui/core';
import React from 'react';

import NewText from './NewText';

const ContainerWork = () => {
    return ( 
       <Grid container direction="column">
            
            <Grid item container >
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <NewText/>
                </Grid>
                <Grid item xs={2}></Grid>
                
            </Grid>
           
       </Grid>
     );
}
 
export default ContainerWork;