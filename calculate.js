//function addExpense() {
   // document.getElementById("demo").innerHTML = "Hello World";
  // document.getElementById("name").innerHTML = "Hello World";
    //var ne=document.getElementById("name").value;
     //var am=document.getElementById("eamount").value;



//}



//<script>


function addExpense() {


var ne = document.getElementById("empid").value;
var amt =document.getElementById("eamount").value;
var ho =document.getElementById("ehours").value;


//var gross = hours * rate;
//var net = gross * .9 ;
if(ne=="" || amt=="" ||ho=="")
{
alert("Please input values before calculating");

}
else{
 
    document.getElementById("test").innerHTML = ne;
 
    document.getElementById("test2").innerHTML =amt;

    document.getElementById("test4").innerHTML =ho;
 
var ra = document.getElementById('r1').value;

if (document.getElementById('r1').checked) {
  ra = document.getElementById('r1').value;

document.getElementById("test3").innerHTML = ra;




}
else{
  ra2=document.getElementById('r2').value;

  document.getElementById("test4").innerHTML = ra;
}


var gross = amt * ho;
var net = gross * .9 ;

document.getElementById("test5").innerHTML = gross;
document.getElementById("test6").innerHTML = net;
}
  }
  var cal={
pay: function(amt, ho){
  var gross = amt * ho;
var net = gross * .9 ;

}

  };
//</script>