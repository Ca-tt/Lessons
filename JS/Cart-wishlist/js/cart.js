let cart = [];

// page elements
let cartButtons = document.querySelectorAll(".add-to-cart-button");
let modalBody = document.querySelector(".cart-modal #modal-body");
let totalPriceText = document.querySelector("#total-price");
let clearCartButton = document.querySelector(".clear-cart-button");

let cartModalLocation = "#cart-modal";

// changing data
let newAddToCartButtonText = "In cart";
let newAddToCartButtonClass = "btn-success";

function saveDataToLocalStorage() {
	localStorage.setItem("savedCart", JSON.stringify(cart));
}

function loadDataFromLocalStorage() {
	let savedCartData = JSON.parse(localStorage.getItem("savedCart"));

	if (savedCartData != null) {
		cart = JSON.parse(localStorage.getItem("savedCart"));
	}
	renderCart();
}
loadDataFromLocalStorage();

// cart buttons in action
cartButtons.forEach((button) => {
	button.onclick = function () {
		// e.preventDefault();

		_thisButton = button;
		let buttonState = checkIfButtonDisabled(_thisButton);

		if (buttonState == "false") {
			handleButton(
				_thisButton,
				buttonState,
				cartModalLocation,
				newAddToCartButtonText,
				newAddToCartButtonClass
			);
			// функции, которые нужно перепилить
			const newProduct = addItemToCart(this);
			insertProductInCart(newProduct);
		} else {
			changeWindowLocation(cartModalLocation);
		}
	};
});

// rerender site markup with saved data
// after page reload
function renderCart() {
	for (let product of cart) {
		insertProductInCart(product);

		// block buttons
		blockButton(product.ID);
	}
	updateCart();
}

// set number for "cart (0)" button
function setCartButtonText() {
	let productCount = cart.length;
	let cartButton = document.querySelector(".cart-products-count");

	// check if cart is not empty
	if (cart.length == 0) {
		productCount = 0;
	}

	cartButton.innerHTML = productCount;
}

// updates all cart related information after any change
function updateCart() {
	calculateTotalPrice();
	setCartButtonText();

	saveDataToLocalStorage();
}

// add product to cart
function addItemToCart(button) {
	let product = {};
	let _this = button;

	product.title = _this.dataset.productTitle;
	product.price = _this.dataset.productPrice;
	product.image = _this.dataset.productImage;
	product.ID = _this.dataset.productId;
	product.count = 1;

	cart.push(product);
	updateCart();

	return product;
}

//
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function setUniqueProductIDs() {
	let productID = getRandomNumber(1, 10000);
	return productID;
}

function increaseProductCount(productTitle, productID) {
	let productInput = document.querySelector(`input#product-${productID}`);
	
	for (let product of cart) {
		if (product.title == productTitle) {
			product.count++;
			productInput.value = product.count;
		}
	}
	updateCart();
}

function decreaseProductCount(productTitle, productID) {
		let productInput = document.querySelector(`input#product-${productID}`);

		for (let product of cart) {
			if (product.title == productTitle) {
				if (product.count > 1) {
					product.count--;
				}
				productInput.value = product.count;
			}
		}
		updateCart();
}

function insertProductInCart(product) {
	let newProduct = document.createElement("div");

	newProduct.classList = "product-wrapper card flex-row";
	newProduct.dataset.productId = product.ID;

	newProduct.innerHTML = `
			<div class="card-header vertical d-flex align-items-center">
				<img src="${product["image"]}" alt="">
			</div>

			<div class="card-body">
				<h5 class="card-title">${product["title"]}</h5>
				<p class="card-text">$${product["price"]}</p>
				<section class="row flex-nowrap">
					<p class="col minus">
						<button class="btn" onclick="decreaseProductCount('${product["title"]}', ${product["ID"]})">-</button>
					</p>
					<p class="col">
						<input class="input-quantity" type="number" data-product-title="${product["title"]}" name="number" id="product-${product["ID"]}" min="1" value="${product["count"]}" oninput="updateProductCount(this.dataset.productTitle, this.value)">
					</p>
					<div class="col">
						<button class="btn plus" onclick="increaseProductCount('${product["title"]}', ${product["ID"]})">+</button>
					</div>
				</section>
			</div>

			<div class="button-group d-flex flex-column justify-content-between align-items-center">
				<div>
					<button type="button" class="btn-close" aria-label="Close" data-product-ID="${product["ID"]}" onclick="removeProduct(${product["ID"]})"></button>
				</div>
			</div>
	`;

	modalBody.appendChild(newProduct);
}


function calculateTotalPrice() {
	let totalPrice = 0;

	for (let product in cart) {
		totalPrice += cart[product].price * cart[product].count;
		// console.log("- cart[product].count -", cart[product].count);
		// console.log("- cart[product].price -", cart[product].price);
		// console.log('- totalPrice -', totalPrice);
		// console.log('======================', product);
	}

	// console.log('- cart -', cart);

	totalPriceText.innerHTML = totalPrice.toFixed(2);
}

function updateProductCount(productTitle, inputValue) {
	for (const cartProduct of cart) {
		if (cartProduct.title == productTitle) {
			cartProduct.count = inputValue;
		}
	}

	updateCart();
	return cart;
}

function removeProduct(productID) {
	let productToDelete = document.querySelector(
		`.product-wrapper[data-product-id='${productID}']`
	);
	// remove product html from modal
	productToDelete.remove();

	// remove product data from JS
	for (const product in cart) {
		productPositionInArray = product;
		if (cart[product].ID == productID) {
			// use splice
			cart.splice(productPositionInArray, 1);
		}
	}
	let blockedProductButton = document.querySelector(
		`.add-to-cart-button[data-product-id="${productID}"`
	);

	enableProductButton(blockedProductButton);

	updateCart();
}

function enableProductButton(button) {
	button.dataset.productAdded = false;
	button.classList.remove("btn-success");
	button.querySelector(".add-to-cart-button-text").innerHTML = "Add to cart";
}

clearCartButton.onclick = clearCart;

function clearCart() {
	cart = [];
	localStorage.clear();
	delete localStorage.savedCart;
	modalBody.innerHTML = "";
	unblockButtons();
	updateCart();
}

/* BUTTONS BLOCK - UNBLOCK */
function blockButton(buttonID) {
	let blockedButton = document.querySelector(
		`.add-to-cart-button[data-product-id="${buttonID}"]`
	);
	let blockedButtonText = blockedButton.querySelector(
		".add-to-cart-button-text"
	);

	blockedButton.dataset.productAdded = true;
	blockedButton.classList.add("btn-success");
	blockedButtonText.innerHTML = "In cart";
}

function unblockButton(lockedButton) {
	let lockedButtonText = lockedButton.querySelector(".add-to-cart-button-text");

	lockedButton.dataset.productAdded = false;
	lockedButton.classList.remove("btn-success");
	lockedButtonText.innerHTML = "Add to cart";
}

function unblockButtons() {
	for (const button of cartButtons) {
		button.dataset.productAdded = false;
		button.classList.remove("btn-success");
		button.querySelector(".add-to-cart-button-text").innerHTML = "Add to cart";
	}
}
