
// $('#myCarousel').carousel({
//     interval:3000,
//     cycle: true
//   }); 


   
      

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