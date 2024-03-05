function productsDes(product) {
  return `<div class="container">
<div class="row align-items-center justify-content-around mt-5">
<div class="col-lg-3">
<img class="img-fluid " src="${product.image}" alt="${product.title}">
</div>
<div class="col-lg-4">
<h3>${product.title}</h3>
<p>قیمت: ${product.price} تومان</p>
<p>دسته بندی: ${product.category}</p>
<p>توضیحات: ${product.description}</p>
</div>
</div>
</div>`;
}

window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const productId = urlParams.get("productId");

  $.ajax({
    url: "https://fakestoreapi.com/products/" + productId,
    type: "GET",
    success: function (product) {
      let fullDesproducts = productsDes(product);
      
      document.getElementById("productDetails").innerHTML = fullDesproducts;
    },
    error: function (error) {
      console.error("خطا در دریافت اطلاعات محصول: ", error);
      document.getElementById("productDetails").innerText =
        "خطا در دریافت اطلاعات محصول";
    },
  });
};
