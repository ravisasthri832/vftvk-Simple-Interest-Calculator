function compute() {

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (principal == '') {
        alert('enter number');
        principal.focus();
        return false
    } 
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML = "If you deposite " + principal + "<br/>at an interest rate of " + rate + "<br/> You will receive an amount of " + interest + "<br/>in the year " + year
}

function updateRate() {
    var r = document.getElementById("rate").value;
    document.getElementById('rate_value').innerHTML = r;
}