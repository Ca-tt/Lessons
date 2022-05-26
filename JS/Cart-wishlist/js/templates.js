let productTemplate = `
  <div class="card">

    <!-- product image -->
    <div class="card-image">
      <img src="img-src" class="card-img-top product-image template-image" alt="...">
    </div>
    
    <!-- product title -->
    <div class="card-body">
      <h5 class="card-title product-title template-title">title</h5>
      <!-- product price -->
      <p class="card-text">
        <span class="product-price template-price">$price</span>
      </p>
    </div>

    <!-- product buttons -->
    <div class="card-footer text-end">
    
      <!-- wishlist button -->
      <button class="btn btn-secondary wishlist-button" data-button-disabled="false">
        <i class="bi bi-star"></i>
        <span class="wishlist-button-text button-text">Save</span>
      </button>

      <!-- add to cart button -->
      <button type="button" class="btn btn-primary btn-md add-to-cart-button template-product-data" data-button-disabled="false"
        data-product-title="product-title-data" data-product-price="product-price-data" data-product-id="product-title-id"
        data-product-image="product-title-image">
        <i class="bi bi-basket"></i>
        <span class="add-to-cart-button-text button-text">Add to cart</span>
      </button>
    </div>
  </div>
`;

let cartItemTemplate = `
  <div class="card-header vertical d-flex align-items-center">
    <img class="template-image" src="" alt="">
  </div>

  <div class="card-body">
    <h5 class="card-title template-title">Template Title</h5>
    <p class="card-text">$<span class="template-price">Product price</span></p>
    <section class="row flex-nowrap">
      <p class="col minus">
        <button class="btn">-</button>
      </p>
      <p class="col">
        <input class="input-quantity template-product-data" type="number" data-product-title="product-data-title" name="number" id="" min="1" value="product-data-count" oninput="updateProductCount(this.dataset.productTitle, this.value)">
      </p>
      <div class="col">
        <button class="btn plus">+</button>
        </d>
    </section>
  </div>

  <div class="button-group d-flex flex-column justify-content-between align-items-center">
    <div>
      <button type="button" class="btn-close template-product-data" aria-label="Close" data-product-ID="product-data-id" onclick="removeProduct(product-data-id)"></button>
    </div>
  </div>
`;

let wishlistItemTemplate = `
  <!-- card image -->
  <div class="card-header vertical d-flex align-items-center">
    <img src="https://dummyimage.com/300x100.png?text=1" alt="">
  </div>
  
  <!-- card data -->
  <div class="card-body">
    <h5 class="card-title">Product Title</h5>
    <p class="card-text">$Product Price</p>
    <p class="card-text"><button class="btn btn-primary">Add to cart</button></p>
  </div>
  
  <!-- card button -->
  <div class=" button-group d-flex flex-column justify-content-between align-items-center">
    <div>
      <button type="button" class="btn-close" aria-label="Close" data-button-disabled="false"
        onclick="removeProduct()"></button>
    </div>
  </div>
`;

