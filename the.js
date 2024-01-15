function loop(){
    let a1 = document.getElementById("a1").value;
    let a2 = document.getElementById("a2").value;
    let text=""
    for (let i = a1; i <= a2; i++) 
    text += i + '</br>';
        document.getElementById('n').innerHTML= text;
}