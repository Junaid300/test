export const initalState={
    isdata:0
} 

 

export const reducer = (state,action) => {
    console.log("I am action",action.type,action);
   
  switch(action.type)
  {
      case 'DataFetched':
        console.log("STATE",state)
          return {
             ...state , isdata:action.item + 1
             
        };
      break;
    
    
      break;
        default:
            return state;
    }
}
 
