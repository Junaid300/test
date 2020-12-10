import React from 'react';

const arr =['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F','G','H','I'
,'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
export const getID =()=>{
    let id="";
    for(let i=0;i<7;i++)
    {
        id=id+ arr[Math.floor(Math.random() * arr.length)];
   
    }
    return id;
}
