let cartButtons = document.querySelectorAll(".btn-add-to-cart");
const modalBody = document.querySelector("#modal-body");

let cart = [];

function setButtonProductIDs() {
	cartButtons.forEach((button) => {
		button.dataset.productId = setUniqueProductIDs();
	});
}
setButtonProductIDs();

cartButtons.forEach((item) => {
	item.onclick = function (e) {
		e.preventDefault();

		if (this.dataset.productAdded == "false") {
			this.classList.add("btn-success");
			this.innerHTML = "Already in cart";

			this.dataset.productAdded = true;

			const newProduct = addItemToCart(this);
			insertProductInCart(newProduct);
		} else {
			location.href = "#product-modal";
		}
	};
});

function addItemToCart(button) {
	let product = {};
	let _this = button;

	product.title = _this.dataset.productTitle;
	product.price = _this.dataset.productPrice;
	product.image = _this.dataset.productImage;
	product.ID = _this.dataset.productId;
	product.count = 1;

	cart.push(product);
	return product;
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function setUniqueProductIDs() {
	let productID = getRandomNumber(1, 10000);
	return productID;
}

function insertProductInCart(product) {
	let newProduct = document.createElement("div");

	newProduct.classList = "product-wrapper card flex-row";
	newProduct.dataset.productId = product.ID;
	console.log(
		"- newProduct.dataset.productId -",
		newProduct.dataset.productId,
		newProduct
	);

	newProduct.innerHTML = `
			<div class="card-header vertical d-flex align-items-center">
				<img src="${product["image"]}" alt="">
			</div>

			<div class="card-body">
				<h5 class="card-title">${product["title"]}</h5>
				<p class="card-text">$${product["price"]}</p>
				<section class="row flex-nowrap">
					<p class="col minus">
						<button class="btn">-</button>
					</p>
					<p class="col">
						<input class="input-quantity" type="number" data-product-title="${product["title"]}" name="number" id="" min="1" value="${product["count"]}" oninput="updateCart(this.dataset.productTitle, this.value); console.log(this.value);">
					</p>
					<div class="col">
						<button class="btn plus">+</button>
						</d>
				</section>
			</div>

			<div class="button-group d-flex flex-column justify-content-between align-items-center">
				<div>
					<button type="button" class="btn-close" aria-label="Close" data-product-ID="${product["ID"]}" onclick="removeProduct(${product["ID"]})"></button>
				</div>
			</div>
	`;

	modalBody.appendChild(newProduct);
	calculateTotalPrice();
}

let totalPriceText = document.querySelector("#total-price");

function calculateTotalPrice() {
	let totalPrice = 0;

	for (let product in cart) {
		if (cart[product].price) {
			totalPrice += cart[product].price * cart[product].count;
		}
	}
	totalPriceText.innerHTML = totalPrice.toFixed(2);
}

function updateCart(productTitle, inputValue) {
	for (const cartProduct of cart) {
		if (cartProduct.title == productTitle) {
			cartProduct.count = inputValue;
		}
	}
	calculateTotalPrice();
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
			console.log("- cart[product] -", cart[product]);
			// use splice
			cart.splice(productPositionInArray, 1);
		}
	}
	let blockedProductButton = document.querySelector(
		`.btn-add-to-cart[data-product-id="${productID}"`
	);

	enableProductButton(blockedProductButton);

	calculateTotalPrice();
}

function enableProductButton(button) {
	button.dataset.productAdded = false;
	button.classList.remove("btn-success");
	button.innerHTML = "Add to cart";
}
