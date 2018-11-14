function calculateTip() {
    
    // Store the data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var service = document.getElementById("service").value;
    var people = document.getElementById("people").value;
    
    if (billAmount === "" || service == 0) {
        window.alert("Please enter in the fields below to calculate your tip");
        return;
    }
    
    if (people === "" || people <= 1) {
        people = 1;
        
        document.getElementById("each").style.display = "none";
    
    } else {
        document.getElementById("each").style.display = "block";
    }
    
var total = (billAmount * service) / people;
total = Math.round(total * 100) / 100;
total = total.toFixed(2);
    
document.getElementById("total").style.display = "block";
document.getElementById("tip").innerHTML = total;

}
document.getElementById("total").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() { calculateTip(); };