//Function to get button values in display
function call(elem){
    var val = elem.value;
    if(document.getElementById("display").innerHTML == 0){
        document.getElementById("display").innerHTML = val;
    }else{
        document.getElementById("display").innerHTML += val;
    }
    
}
 
//Function to clean all the content of display
 function clean(){
     document.getElementById("display").innerHTML = 0;
    
 }

//Function to clear last digit in display
function cancel(){
     var content = document.getElementById("display").textContent;
     document.getElementById("display").innerHTML = content.substring(0, content.length-1);
     
}

//Function to calculate input content
function cal(){
    var content = document.getElementById("display").innerHTML;
    
    if(content){
      document.getElementById("display").innerHTML = eval(content) ; 
    }

}