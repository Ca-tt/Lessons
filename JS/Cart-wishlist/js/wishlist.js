let wishlistButtons = document.querySelectorAll(".wishlist-button");
let wishlistModalLocation = "#wishlist-modal";

// changing data
let newWishlistButtonText = "Saved";
let newWishlistButtonClass = "btn-info";

// нужно создать template для wishlist-item'а
wishlistButtons.forEach((button) => {
	button.onclick = () => {
		_thisButton = button;
		let buttonState = checkIfButtonDisabled(_thisButton);

		handleButton(
			_thisButton,
			buttonState,
			wishlistModalLocation,
			newWishlistButtonText,
			newWishlistButtonClass
		);

		// // block button
		// collect Data
		// generateTemplate and insert templates
	};
});
