
// $('#myCarousel').carousel({
//     interval:3000,
//     cycle: true
//   }); 

// contact message function
function userName(submit) {
  event.preventDefault();
  var name = $("input#name").val();
  var email = $("input#email").val();
  alert("Hi " + name + " ,thank for contacting us we have recieved your message .");

};


// business logic
function Mypizza(type, size, crust, tops) {
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.tops = tops;
};

Mypizza.prototype.fullMypizza = function () {
  return this.type + " Outermost layer is a crust of " + this.crust + "and topping of" + this.tops + ".";
};


function Cost(price, number, pick) {
  this.price = price;
  this.number = number;
  this.pick = pick;

};

Cost.prototype.finalCost = function () {
  return this.price * this.number + this.pick;
};

var pizzaPrices = [1200, 950, 750];
var deliveryCost = [0, 300];





//user interface logic

$(document).ready(function () {
  $("#pizzaform").submit(function (event) {
    event.preventDefault();
    var typeOfPizza = $("#type").val();

    var sizeOfPizza = parseInt($("#size").val());

    var crustOfPizza = $("#crust").val();

    var topOfPizza = $("#topping").val();

    var numberOfPizza = parseInt($("#num").val());

    var pizzaDelivery = parseInt($("#mode").val());

    var finalPrice = pizzaPrices[sizeOfPizza];
    var finalDelivery = deliveryCost[pizzaDelivery];

    var newMypizza = new Mypizza(typeOfPizza, sizeOfPizza, crustOfPizza, topOfPizza);
    var newTotal = new Cost(numberOfPizza, finalPrice, finalDelivery);
     console.log(pizzaDelivery);
    if (pizzaDelivery === 0) {
      alert("Thanks for placing an order which is" + newMypizza.fullMypizza() + ". And total cost is" + newTotal.finalCost());

    }
    else if (pizzaDelivery === 1) {
      prompt("Enter the place where Your pizza will be delivered.");

      alert("Thanks for placing order which is " + newMypizza.fullMypizza() + ". And total cost is" + newTotal.finalCost());

    }

  });
});