function compute() 
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (principal == '' || principal <= 0) {
        alert('Enter a positive number');
        principal.focus();
        return false
    } 
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML = "If you deposit " + "<span class='bgyello'>" + principal + "</span>"  + ", <br> at an interest rate of "+ "<span class='bgyello'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='bgyello'>" + interest + "</span>" + ", <br> in the year " + "<span class='bgyello'>" + year + "</span>.";
}

function updateROI() {
    var rate = document.getElementById("rate").value;
    document.getElementById('rate_value').innerHTML=rate;
	output.innerHTML = rate.value;
	slider.oninput = function() 
    {
        output.innerHTML = this.value;
    }
}