var display = document.querySelector(".display")

function append_display(input){
    display.value += input   
}
function clear_display(){
    display.value=""
}
function equal(){
    try{
        display.value =eval(display.value)
    }
    catch(error){
        display.value ="ERROR"
    }
}