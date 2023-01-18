import inquirer from "inquirer";
type ansType={
userGuess: number
}
const systemGeneratedNo= Math.random() * 10;
const answers : ansType = await inquirer.prompt([
    {
        type: "number",
        name:"userGuess",
        message:"Write your guess:"
    }
])
const {userGuess}=answers;
console.log(userGuess,"user Guess ", systemGeneratedNo, "system")
if(userGuess === systemGeneratedNo){
    
    console.log("yah! your answer is correct \n you Win!")
}else{
    console.log("Please try again")
}

console.log(answers.userGuess)
