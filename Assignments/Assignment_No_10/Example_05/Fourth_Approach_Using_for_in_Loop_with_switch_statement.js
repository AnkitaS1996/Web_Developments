var InputtedNumber = [12,56,755,27,16,2,1104,65,88];


for(let i in InputtedNumber)
{
    switch(true)
    {
        case InputtedNumber[i] % 3 === 0 && InputtedNumber[i] % 8 === 0:
            console.log(InputtedNumber[i]  + " " + "divisible by 3 And 8");
            break;
        case InputtedNumber[i] % 3 === 0:
            console.log(InputtedNumber[i]  + " " + "divisible by 3");
            break;
        case InputtedNumber[i] % 8 === 0:
            console.log(InputtedNumber[i]  + " " + "divisible by 8");
            break;
        default:
            console.log(InputtedNumber[i]  + " " + "Not Divisible by 3 And 8");
            break;
    }
 
}