
import React, { useState } from 'react';


export const  ReUseForm = (initialData) => {
    const [input,setInput]=useState(initialData)
    const handleChange = (e) =>{
        const {name,value}=e.target
        
        setInput({...input , [name]:value})
    }
    return {
        input,setInput,handleChange
    };
}


export const FormData = (props) =>{
    
   return(
   <form >
        {props.children}
        
    </form>
)}