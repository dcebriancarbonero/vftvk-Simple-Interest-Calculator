function myFunction(){
    var amount = parseInt(document.getElementById("amount_input").value);
    var rate = document.getElementById("outrange").value;
    var year = document.getElementById("years_select").value;
    var answer = parseFloat(amount) * parseFloat(rate) * parseFloat(year) * 0.01;

    if(document.getElementById("amount_input").value == "" || isNaN(amount) || amount <= 0){
        window.alert("Please fill all the fields correctly");
        return;
    }else{
        document.getElementById('answer1').innerHTML = "If you deposit  " + amount.toString();
        document.getElementById('answer2').innerHTML = "at an interest rate of  " + rate.toString();
        document.getElementById('answer3').innerHTML = "You will recive an amount of  " + answer.toString();
        document.getElementById('answer4').innerHTML = "in the year  " + (2021 + parseInt(year)).toString();
    }

}

function show_rate(val) {
    document.getElementById('rate_value').innerHTML = val.toString() + "%";
  }
