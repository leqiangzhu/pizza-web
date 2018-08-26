 //back the constructor
function Pizza(size,toppings){
	this.size=size;
	this.toppings=[];
	
}
var eachPrice={
			"lager":7,
			"medium":6,
			"small":5,
			"ex-lager":8,
			"bacon":1,
			"pepperoni":1,
			"beef":2,
			"mushrooms":1.5,
			"onions":1,
			"green-peppers":1.5,
			"blcakolives":1,
			"bananapeppers":1
			};

//the check order choose toppings method
 function toppingsChoose(inputtopping){
	 var toppings=[];
	 inputtopping.each(function(){
		 var choosetopping=$(this).val();
		 toppings.push(choosetopping);
	 })
	return toppings;
}  

//the method of choose size
function sizeChoose(){
	var input =$("#pizza-size").val();
	return input;
}




//this function is to calculate the price 
Pizza.prototype.checkePrice = function(){
			
			var totalPrice=0;
			//var toppingChoose;
			this.toppings.forEach(function(topping){
				totalPrice+=eachPrice[topping]
			})
			return totalPrice;
}; 

$(document).ready(function(){
	$("#pizza-chose").submit(function(event){
		event.preventDefault();
		
		var pizzaOrder=new Pizza();
		
		//the size of the order choose
		pizzaOrder.size=$("#pizza-size").val();
		var toppings=$("input:checkbox[name=topping]:checked");
		pizzaOrder.toppings=toppingsChoose(toppings);
		pizzaOrder.size=sizeChoose();
		var priceSize=eachPrice[pizzaOrder.size];
		var totalPrice=pizzaOrder.checkePrice()+priceSize;
		
		$("#total-price").show();
		$("#show-price").text(totalPrice);

		});
		});