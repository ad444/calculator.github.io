//Function to get button values in display
function call(elem){
    var val = elem.value;
    if(document.getElementById("display").value == 0){
        document.getElementById("display").value = val;
    }else{
        document.getElementById("display").value += val;
    }
    
}
 
//Function to clean all the content of display
 function clean(){
     document.getElementById("display").value = 0;
    
 }

//Function to clear last digit in display
function cancel(){
     var content = document.getElementById("display").value;
     document.getElementById("display").value = content.substring(0, content.length-1);
     
}

//Function to calculate input content
function cal(){
    var content = document.getElementById("display").value;
    
    if(content){
      document.getElementById("display").value = eval(content) ; 
    }

}