$(document).ready(function () {
    // functions
  function showproducts(product) {
    return ` <div class="col-lg-2 d-flex flex-column align-items-center h-product">
        <img class="img-fluid product-img" src="${product.image}" alt=" ${product.title}">
        <p class="text-muted mt-2 product-title text-center"> ${product.title}</p>
        <p class="text-danger product-price fw-bold "> ${product.price}تومان</p>
    </div>`;
  }
  // product
  $.ajax({
    url: "https://fakestoreapi.com/products",
    type: "GET",
    success: function (products) {
      $.each(products, function (index, product) {
        let showProducts = showproducts(product);
        if (index < 18) {
          $("#prod").append(showProducts);
        } else {
          return index;
        }
      });
      
      $(".product-img").click(function () {
        let index = $(".product-img").index(this);
        let productUrl = "https://fakestoreapi.com/products/" + (index + 1);
        $.ajax({
          url: productUrl,
          type: "GET",
          success: function (product) {
            let newWindow = window.location.href = "productsDetails.html?productId=" + (index + 1);
          },
          error: function (error) {
            alert("خطا در دریافت اطلاعات محصولات: " + error);
          },
          complete: function () {
            console.log("محصولات به صورت کامل دریافت شد");
          },
        });
      });
    },
    error: function (error) {
      alert("خطا در دریافت اطلاعات محصولات: " + error);
    },
    complete: function () {
      console.log("محصولات به صورت کامل دریافت شد");
    },
  });
});
