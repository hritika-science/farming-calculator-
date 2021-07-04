function calculate(){ 
    var a = document.getElementById("inputside").value;
    area = a*a;
    document.getElementById ("lblarea").innerHTML=area;

    perimeter = 4*a;
    document.getElementById("lblfence").innerHTML=perimeter;


              
}