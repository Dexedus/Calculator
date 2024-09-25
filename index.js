var display = document.getElementById("display");

$("button").click(function(){
    var buttonPressed = this.id;
    display.value += buttonPressed;
    
});

$(".Clear").click(function(){
    display.value = "";
});

$(".Calculate").click(function(){
    try{
    display.value = eval(display.value)
    }
    catch(error){
    display.value = "Error";
    }
});