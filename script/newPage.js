$(document).ready(function(){

    $.ajax({
        url: 'https://fakestoreapi.com/products/categories',
        type: 'GET',
        success: function(categories) {
            const $categoriesList = $('#categoriesList');
            categories.forEach(category => {
                $categoriesList.append(`<li><a class="dropdown-item category-item d-flex flex-column" href="categorypage.html?category=${category}">${category}</a></li>`);
            });
        },
    });
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        $.ajax({
            url: `https://fakestoreapi.com/products/category/${category}`,
            type: 'GET',
            success: function(products) {
                const $productsList = $('#productsList .row');
                products.forEach(product => {
                    $productsList.append(`
                        <div class="col-lg-2 height-category">
                            <h6>${product.title}</h6>
                            <img class="img-category" src="${product.image}" alt="${product.title}">
                        </div>
                    `);
                });
            },
            error: function (error) {
                alert("خطا در دریافت اطلاعات محصولات: " + error);
            },
            complete: function () {
                console.log("محصولات به صورت کامل دریافت شد");
            },
        });
    }
});
