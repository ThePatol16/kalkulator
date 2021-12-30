var liczba1;
var liczba2;
var operator;


function uzup(x) {
    document.getElementById("text").value+=x
}
function oper(x){
    liczba1=parseInt(document.getElementById("text").value)
    document.getElementById("text").value=null
    operator=x;
}
function licz(){
    liczba2=parseInt(document.getElementById("text").value)
    document.getElementById("text").value=null
    if(operator==0){
        document.getElementById("text").value=liczba1+liczba2
    }
    if(operator==1){
        document.getElementById("text").value=liczba1-liczba2
    }
    if(operator==2){
        document.getElementById("text").value=liczba1*liczba2
    }
    if(operator==3){
        document.getElementById("text").value=liczba1/liczba2
    }
}
function usuwanko(){
    document.getElementById("text").value=null
}