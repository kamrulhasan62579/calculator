function insert(num){
    document.getElementById('display').value = 
    document.getElementById('display').value + num;
}
function equal(){
    document.getElementById('display').value = eval
    (document.getElementById('display').value);
}
function clean(){
    const clean = "";
    document.getElementById('display').value= clean;
}
