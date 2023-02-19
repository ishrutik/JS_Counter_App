let data=0;
document.getElementById("num").innerHTML=data;

function increase()
{
    data+=1;

    document.getElementById("num").innerHTML=data;


}

function decrease()
{
    data-=1;
    data= data<0 ? 0 : data;
    document.getElementById("num").innerHTML=data;
}

function reset()
{
    data=0;
    document.getElementById("num").innerHTML=data;
}