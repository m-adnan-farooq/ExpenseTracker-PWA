import React from 'react';
import transactionData from './TransactionData';

export const History = (transactionState:React.ComponentState) => {
    return (
        <div>
            <h1>Your Transaction History:</h1>
            {transactionData.map((val, index)=>{
               return(
                   <div>
                        {Object.keys(val)}
                        <br></br>
                        {Object.values(val)}
                   </div>
                       
               ) 
                
            })}

            
    
        </div>
    )
}