function entries(s){
    document.calc.output.value += s;
}

function erase(){
    document.calc.output.value = '';
}

function calculate(){
    document.calc.output.value = eval(document.calc.output.value);
}