const Num = [12,58,65,855,355,75,6,24];

var Max_Ele = 0,i = 0,Second_Max = 0;

Max_Ele = Num[0];
// Second_Max = Num[0];
for(i=0;i<=Num.length-1;i++)
{
    if(Num[i] > Max_Ele)
    {
        Second_Max = Max_Ele;
        Max_Ele = Num[i];
    }
    else if(Num[i] > Second_Max && Num[i] < Max_Ele)
    {
        Second_Max = Num[i];
        continue;
    }
}
console.log("Maximum Element Of Array = " + Max_Ele);
console.log("Second Maximum Element Of Array = " + Second_Max);