
setInterval(add(),5000)

function add(){
let num1=parseInt(document.getElementById("num1").value);
let num2=parseInt(document.getElementById("num2").value);
let add = num1+num2;
document.getElementById("result").value=add;

}
function multiply(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let add = num1*num2;
    document.getElementById("result").value=add;    
    }
    function mod(){
        var add= document.getElementById("add");

        add.style.color=red;
        let num1=parseInt(document.getElementById("num1").value);
        let num2=parseInt(document.getElementById("num2").value);
        let add = num1%num2;
        document.getElementById("result").value=add;        
        }
        function equal(){
            let num1=parseInt(document.getElementById("num1").value);
            let num2=parseInt(document.getElementById("num2").value);
            let add = num1===num2?"true":"false";
            document.getElementById("result").value=add;            
            }





            