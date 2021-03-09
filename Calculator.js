function keyCall(event){
    var x = event.which;  //unicode of the key
        
        if(x > 95 && x < 106){
            document.getElementById("display").value += String.fromCharCode(x).substring(0, 0);  
        }else if( x == 111 || x == 107 || x == 109 || x == 106){
            document.getElementById("display").value += String.fromCharCode(x).substring(0, 0);
            
        }else if(x > 47 && x < 58){
            document.getElementById("display").value += String.fromCharCode(x).substring(0, 0);
        }
        else if(x == 13){
            cal();
        }
        else{
            document.getElementById("display").value = 
            document.getElementById("display").value.substring(0, document.getElementById("display").value.length-1);
        }
  }
  
 function call(elem){
    var val = elem.value;
    document.getElementById("display").value += val;
 }
 
 function clean(){
     document.getElementById("display").value = "";
    
 }

function cancel(){
     var content = document.getElementById("display").textContent;
     document.getElementById("display").value = content.substring(0, content.length - 1);
     
}
    
function cal(){
    var content = document.getElementById("display").value;
    
    if(content){
      document.getElementById("display").value = eval(content) ; 
    }

}
    
function blink(){
   var ele = document.getElementById('heading');
   ele.style.visibility = (ele.style.visibility == 'hidden' ? "visible" : 'hidden'); // TERNARY OPERATOR IS USED
}        

setInterval(blink, 1000);