import { TextField } from '@material-ui/core';
import React from 'react';

const TimePikerCompo = (props) => {
    const {className,label,name,value,onChange}=props
    return ( 
        <TextField 
        id="datetime-local"
        variant="outlined"
        size="small"
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        type="datetime-local"
        
        className={className}
        InputLabelProps={{
          shrink: true,
        }}
      />
     );
}
 
export default TimePikerCompo;