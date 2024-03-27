
import inquirer from "inquirer"

interface UserInput{
    userID:string,
    userpin:number,
    accountType:string,
    transactionType:string,
    amount:number,
}
const userInput:UserInput = await inquirer.prompt([
     {
       type:"input",
       name:"userID",
       message:"enter your ID"
     },
     {
        type: "number",
        name:"userpin",
        message:"Enter your Pin",
     },
     {
        type:"list",
        name:"accountType",
        choices:["current","saving"],
        message:"Select your Account Type",
     },
     {
        type:"list",
        name:"transactionType",
        choices:["FastCash","Cash withdraw","Balance Inquiry"],
        mesaage:"Select your transaction"
     },
     {
        type:"number",
        name:"amount",
        message:"Enter amount you want to withdraw",
        when(userInput){
            return userInput.transactionType === "Cash withdraw";
        }
     },
     {
        type:"list",
        name:"amount",
        choices:[1000,2000,5000,10000,20000,25000],
        message:"select your amount you want to withdraw",
        when(userInput){
            return userInput.transactionType ==="Fast cash"
        }
     }
]);

//making variables of user input data

const userID = userInput.userID;
const userpin= userInput.userpin;
const enteredAmount= userInput.amount;

if((userID && userpin)&& userInput.transactionType === "balance Inquiry"){
    const userBalance= Math.floor(Math.random()* 100000);
    console.log(`your current balance is Rs ${userBalance}\n`);
    
}else if(userID && userpin){
    const userBalance2=Math.floor(Math.random()*100000);
    if(userBalance2 > enteredAmount){
        console.log(`your account has been debited with Rs ${enteredAmount} and your remaining balance is ${userBalance2 - enteredAmount}`);
    }else{
        console.log(`\n unsufficent Balance`);
    }
}




