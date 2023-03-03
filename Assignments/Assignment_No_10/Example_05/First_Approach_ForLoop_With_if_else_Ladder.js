const InputtedNumber = [12,56,755,27,16,2,1104,65,88];

for(var i = 0;i <= InputtedNumber.length-1;i++)
{
    if(InputtedNumber[i] % 3 == 0 && InputtedNumber[i] % 8 == 0)
    {
        console.log(InputtedNumber[i]  + " " + "divisible by 3 And 8");
    }
    else if(InputtedNumber[i] % 3 == 0)
    {
        console.log(InputtedNumber[i]  + " " + "divisible by 3");
    }
    else if(InputtedNumber[i] % 8 == 0)
    {
        console.log(InputtedNumber[i]  + " " + "divisible by 8");
    }
    else
    {
        console.log(InputtedNumber[i]  + " " + "Not divisible by 3 And 8");
    }
}