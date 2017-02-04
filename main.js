//function addExpense() {
   // document.getElementById("demo").innerHTML = "Hello World";
  // document.getElementById("name").innerHTML = "Hello World";
    //var ne=document.getElementById("name").value;
     //var am=document.getElementById("eamount").value;



//}



//<script>
function myFunction() {
var rate = document.getElementById("payrate").value;
var hours =document.getElementById("hours").value;
var gross = hours * rate;
var net = gross * .9 ;

 if (gross != null) {
    document.getElementById("demo").innerHTML = gross;
}
 if (net != null) {
    document.getElementById("demo2").innerHTML =net;
        }

  }
//</script>