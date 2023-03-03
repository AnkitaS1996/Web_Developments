const Num = [12,58,65,85,35,75,6,24];

var Max_Ele = 0,i = 0;

Max_Ele = Num[0];
for(i=0;i<=Num.length-1;i++)
{
    if(Num[i] > Max_Ele)
    {
        Max_Ele = Num[i];
    }
}
console.log("Maximum Element Of Array = " + Max_Ele);