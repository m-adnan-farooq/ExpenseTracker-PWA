import React from 'react';
import transactionData from './TransactionData';


export const NewTransaction = (transactionState:React.ComponentState) => {
    
    let submitTransaction = () => {
        let particulars = (document.getElementById("particulars") as HTMLInputElement).value;
        let income = (document.getElementById("income") as HTMLInputElement).value;
        let expense = (document.getElementById("expense") as HTMLInputElement).value;
        let transaction = {"Particulars":particulars,"Income":income,"Expense":expense}
        transactionData.push(transaction)
        transactionState[1](...transactionData)
        console.log(transactionData)
    }
    
    return(
        <div>
            <input id="particulars" type="text" placeholder="Particulars"/>
            <input id="income" type="number" placeholder="income"/>
            <input id="expense" type="number" placeholder="expense"/>
            <button onClick={submitTransaction}>Submit transaction</button>
        </div>
    )    
}



