// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function() {
	// =============================
	// Private methods and propeties
	// =============================
	cart = [];

	// Constructor
	// shortcut for properties creation
	function Item(name, price, count) {
		this.name = name;
		this.price = price;
		this.count = count;
	}

	// Save cart array with objects to local storage
	// works as a save changes button
	function saveCart() {
		sessionStorage.setItem("shoppingCart", JSON.stringify(cart));
	}

	// Load cart
	function loadCart() {
		cart = JSON.parse(sessionStorage.getItem("shoppingCart"));
	}
	if (sessionStorage.getItem("shoppingCart") != null) {
		loadCart();
	}

	// =============================
	// Public methods and properties
	// =============================
	var obj = {};

	obj.addItemToCart = function(name, price, count) {
		// check all cart elements
		console.log("- cart before addItemToCart() -", cart);

		for (var item in cart) {
			// if someone has the same name
			if (cart[item].name === name) {
				// we add the count
				cart[item].count++;

				// Save cart array with objects to local storage
				saveCart();
				// return cart data (maybe)
				return;
			}
		}

		// when we don't have the same name
		// but if we got, this code is ignored
		// because of return before

		// create item with 3 props in conscructor
		var item = new Item(name, price, count);

		// push object into array
		cart.push(item);

		console.log("- cart after addItemToCart() -", cart);

		// Save cart array with objects to local storage
		saveCart();
	};
	// Set count from item
	obj.setCountForItem = function(name, count) {
		for (var i in cart) {
			if (cart[i].name === name) {
				cart[i].count = count;
				break;
			}
		}
	};
	// Remove item from cart
	obj.removeItemFromCart = function(name) {
		for (var item in cart) {
			if (cart[item].name === name) {
				cart[item].count--;
				if (cart[item].count === 0) {
					cart.splice(item, 1);
				}
				break;
			}
		}
		saveCart();
	};

	// Remove all items from cart
	obj.removeItemFromCartAll = function(name) {
		for (var item in cart) {
			console.log('- cart before remove -', cart);
			
			console.log('- item to be removed-', item);
			if (cart[item].name === name) {
				console.log('- item to be removed-', item);
				// remove 1 item at it's own position [item = index]
				cart.splice(item, 1);
				break;
			}
		}
		saveCart();
	};

	// Clear cart
	obj.clearCart = function () {
		// just clear the array from objects
		cart = [];
		saveCart();
	};

	// Count cart
	obj.totalCount = function () {
		// display the number on the cart button
		var totalCount = 0;
		for (var item in cart) {
			totalCount += cart[item].count;
		}
		return totalCount;
	};

	// Total cart
	obj.totalCart = function () {
		// get all product count multiplied by price
		var totalCart = 0;
		for (var item in cart) {
			totalCart += cart[item].price * cart[item].count;
		}
		return Number(totalCart.toFixed(2));
	};

	// List cart
	obj.listCart = function() {
		var cartCopy = [];

		for (i in cart) {
			item = cart[i];
			console.log('- item -', item);
			
			itemCopy = {};
			
			for (p in item) {
				// copy product props to itemCopy
				itemCopy[p] = item[p];
				console.log('- item[p] -', item[p]);
			}
			
			// calculate total price 
			// and add it to Copy item
			itemCopy.total = Number(item.price * item.count).toFixed(2);
			
			// push data with total props
			cartCopy.push(itemCopy);
			console.log('- cartCopy -', cartCopy);
			
		}
		return cartCopy;
	};

	obj.displayCart = function() {
		// get all data from cart
		// including total price
		var cartArray = shoppingCart.listCart();
		var output = "";

		// it would be much better to use template
		// or not?
		for (var i in cartArray) {
			output +=
				"<tr>" +
				"<td>" +
				cartArray[i].name +
				"</td>" +
				"<td>(" +
				cartArray[i].price +
				")</td>" +
				"<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" +
				cartArray[i].name +
				">-</button>" +
				"<input type='number' class='item-count form-control' data-name='" +
				cartArray[i].name +
				"' value='" +
				cartArray[i].count +
				"'>" +
				"<button class='plus-item btn btn-primary input-group-addon' data-name=" +
				cartArray[i].name +
				">+</button></div></td>" +
				"<td><button class='delete-item btn btn-danger' data-name=" +
				cartArray[i].name +
				">X</button></td>" +
				" = " +
				"<td>" +
				cartArray[i].total +
				"</td>" +
				"</tr>";
		}
		// insert products to 'show-cart' table
		$(".show-cart").html(output);

		// insert to total price div
		// example: Total price: $4.00
		$(".total-cart").html(shoppingCart.totalCart());

		// insert total products number to button.
		// example: (6)
		$(".total-count").html(shoppingCart.totalCount());
	}


	// cart : Array
	// Item : Object/Class
	// addItemToCart : Function
	// removeItemFromCart : Function
	// removeItemFromCartAll : Function
	// clearCart : Function
	// countCart : Function
	// totalCart : Function
	// listCart : Function
	// saveCart : Function
	// loadCart : Function
	return obj;
})();

// *****************************************
// Triggers / Events
// *****************************************
// Add item
$(".add-to-cart").click(function(event) {
	event.preventDefault();
	// get product name and price from button
	var name = $(this).data("name");
	var price = Number($(this).data("price"));

	// Add item to cart
	shoppingCart.addItemToCart(name, price, 1);
	shoppingCart.displayCart();
});

// Clear items
$(".clear-cart").click(function() {
	shoppingCart.clearCart();
	shoppingCart.displayCart();
});


// Delete item button
$(".show-cart").on("click", ".delete-item", function(event) {
	var name = $(this).data("name");
	shoppingCart.removeItemFromCartAll(name);
	shoppingCart.displayCart();
});

// -1
$(".show-cart").on("click", ".minus-item", function(event) {
	var name = $(this).data("name");
	shoppingCart.removeItemFromCart(name);
	shoppingCart.displayCart();
});
// +1
$(".show-cart").on("click", ".plus-item", function(event) {
	var name = $(this).data("name");
	shoppingCart.addItemToCart(name);
	shoppingCart.displayCart();
});

// Item count input
$(".show-cart").on("change", ".item-count", function(event) {
	var name = $(this).data("name");
	var count = Number($(this).val());
	shoppingCart.setCountForItem(name, count);
	shoppingCart.displayCart();
});


