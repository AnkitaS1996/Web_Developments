const Num = [12,58,65,85,35,75,6,24];

var Min_Ele = 0,i = 0;

Min_Ele = Num[0];
for(i=0;i<=Num.length-1;i++)
{
    if(Num[i] < Min_Ele)
    {
        Min_Ele = Num[i];
    }
}
console.log("Minimum Element Of Array = " + Min_Ele);