function dis(val)
{
    document.getElementById("result").value+=val;
}
function del()
    {
    document.getElementById("result").value = document.getElementById("result").value.slice(0, -1)
    }
function solve()
{
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
    // document.write(y);
    // document.querySelector("input").innerHTML = y;

}
function clr()
{
    document.getElementById("result").value="";
}