var No = 83;

for(var i = 2;i <= No;i++)
{
    if(No % i == 0)
    {
        break;
    }
}
if(No == i)
{
    console.log("Given Number is Prime");
}
else
{
    console.log("Given Number is Not Prime");
}