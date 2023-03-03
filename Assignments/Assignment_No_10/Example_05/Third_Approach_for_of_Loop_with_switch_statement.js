var InputtedNumber = [12,56,755,27,16,2,1104,65,88];


for(let i of InputtedNumber)
{
    switch(true)
    {
        case i % 3 === 0 && i % 8 === 0:
            console.log(i  + " " + "divisible by 3 And 8");
            break;
        case i % 3 === 0:
            console.log(i  + " " + "divisible by 3");
            break;
        case i % 8 === 0:
            console.log(i + " " + "divisible by 8");
            break;
        default:
            console.log(i + " " + "Is Not Divisible by 3 And 8");
            break;
    }
 
}