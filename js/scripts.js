function Account(cust, dep) {
  this.customer = cust;
  this.startingDeposit = dep;
}
Account.prototype.withdraw = function(amount) {
  this.startingDeposit = this.startingDeposit - amount;
}
Account.prototype.deposit = function(amount) {
  this.startingDeposit = this.startingDeposit + amount;
}


$(document).ready(function() {
  $("#new-account").submit(function(event) {
    event.preventDefault();
    var inputtedCustomer = $("input#customer").val();
    var inputtedDeposit = parseInt($("input#startingDeposit").val());

    var newCustomer = new Account(inputtedCustomer, inputtedDeposit);
    $("ul#customerResult").append('<li>' + newCustomer.customer + '</li>');
    alert(inputtedDeposit);

    $("#fakeButton").click(function(){
      var inputtedAmount = parseInt($("input#amount").val());
      var typeCheck = $("input:radio[name=transactionType]:checked").val();
      if (typeCheck === "withdraw") {

        newCustomer.withdraw(inputtedAmount);
        $("#currentBalance").text(newCustomer.startingDeposit);
        console.log(newCustomer.startingDeposit);

      } else{
        newCustomer.deposit(inputtedAmount);
        $("#currentBalance").text(newCustomer.startingDeposit);
    }
    });
  });


});
