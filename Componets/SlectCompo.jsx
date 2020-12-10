import { FormControl, InputLabel,MenuItem, Select} from '@material-ui/core';

import React from 'react';
import { getRepeat } from './ServiceProvider/services';

const SlectCompo = (props) => {
    const {className , label , values , name , MenuProps , onChange , options} =props
   
    return ( 
        <>
        <FormControl variant="outlined"  size="small" className={className}>
                        
                <InputLabel>{label}</InputLabel>
                       <Select 
                     
                       MenuProps={MenuProps}
                       value={values} label={label} name={name} onChange={onChange}>
                           {options.map(o=>
                               <MenuItem key={o.id} value={o.value }>{o.value}</MenuItem>
                               )}
                       </Select>
                   </FormControl>
        </>

     );
}
 
export default SlectCompo;