
// $('#myCarousel').carousel({
//     interval:3000,
//     cycle: true
//   }); 

// business logic
function Mypizza(type, size, crusts, tops) {
  this.type = type;
  this.size = size;
  this.crusts = crusts;
  this.tops =tops;
};

Mypizza.prototype.fullMypizza = function() {
  return this.type +", the size of pizza is" + this.size + " Outermost layer is a crust of " + this.crusts + "and topping of" + this.tops + ".";
};


function Cost(price, number, pick){
  this.price = price;
  this.number = number;
  this.pick = pick;

};

Cost.prototype.totalCost = function () {
return this.price * this.number + this.pick;
};

var pizzaPrices = [1200, 950, 750];
var deliveryPrice =  [0, 300]; 
   
      
// contact message function
function userName(submit){
    event.preventDefault();
      var name = $("input#name").val();
      var email =$("input#email").val();
     alert("Hi " + name + " ,thank for contacting us we have recieved your message .");
  
};


//user interface logic

$(document).ready(function () {
  $("form#myForm").submit(function (event) {
      event.preventDefault();
      var pizzaType = $("#type").val();

      var pizzaSize = parseInt($("#size").val());

      var pizzaCrust = $("#crust").val();

      var pizzaTop = $("#topping").val();

      var pizzaQty = parseInt($("#num").val());

      var pizzaPick = parseInt($("#mode").val());

  });
});