var myVar = setInterval(f1, 1000);

function f1(){
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}