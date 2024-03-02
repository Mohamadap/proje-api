$(document).ready(function(){
    // product
    $.ajax({
        url: "https://fakestoreapi.com/products",
        type: "GET",
        success: function(products){
            $.each(products, function(index, product){
                if(index <18){
                    $("#prod").append(
                        '<div class="col-lg-2 d-flex flex-column align-items-center h-product">' +
                            '<img class="img-fluid product-img" src="' + product.image + '" alt="' + product.title + '">' +
                            '<p class="text-muted mt-2 product-title text-center">' + product.title + '</p>' +
                            '<p class="text-danger product-price fw-bold ">' + product.price + ' تومان</p>' +
                        '</div>'
                    );
                }else{
                    return index
                }
                
            });
            
            $(".product-img").click(function(){
                let index = $(".product-img").index(this);
                let productUrl = 'https://fakestoreapi.com/products/' + (index + 1);
                $.ajax({
                    url: productUrl,
                    type: "GET",
                    success: function(product){
                        let newWindow = window.open('', '_blank');
                        
                        newWindow.document.write(
                            '<html><head><title>' + product.title + '</title>' +
                                ' <link rel="stylesheet" href="style/bootstrap.rtl.css" />' +
                                ' <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="crossorigin="anonymous"referrerpolicy="no-referrer"/>'+
                                '<link rel="stylesheet" href="style/style.css" />'+
                                '</head><body>' +
                                 '<section>' +
                                '<div class="container-fluid">' +
                                '<div class="row mt-4 d-flex justify-content-center">' +
                                '<div class="col-lg-3 mt-2">' +
                                '<ul class="list-unstyled  d-flex align-items-center justify-content-center ms-5">' +
                                '<li>' +
                                '<a class="m-2 fs-5  text-black" href=""><i class="fa-regular fa-user"></i></a>' +
                                '<a class="m-2 fs-5 text-black" href=""><i class="fa-solid fa-cart-shopping"></i></a>' +
                                '<a class="m-2 fs-5 text-black" href=""><i class="fa-solid fa-code-compare"></i></a>' +
                                '<a class="m-2 fs-5 text-black" href=""><i class="fa-regular fa-heart"></i></i></a>' +
                                '</li>' +
                                '</ul>' +
                                '</div>' +
                                '<div dir="rtl" class="col-lg-6">' +
                                '<input class="w-100 h-100 rounded-pill" placeholder="جستجوی محصولات" type="text" />' +
                                '</div>' +
                                '<div class="col-lg-3 mt-1">' +
                                '<img class="img-fluid" src="img/دیجی-مارکت.png" alt="" />' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</section>' +
                                `
    <section dir="rtl" class="mt-4 bg-white rounded-pill">
        <div class="container-fluid">
            <div class="row d-flex align-items-center">
                <div class="col-lg-12 d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center justify-content-center">
                        <nav class="navbar navbar-expand-lg navbar-dark ">
                            <div class="container">
                                <a class="navbar-brand text-black" href="index.html">منوی اصلی</a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link text-black" href="#">درباره ما</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle text-black" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                دسته بندی‌ها
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item text-black" href="#">الکترونیک</a>
                                                <a class="dropdown-item text-black" href="#">پوشاک</a>
                                                <div class="dropdown-divider text-black"></div>
                                                <a class="dropdown-item text-black" href="#">کالای دیگر</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    
                    </div>
                    <div class="mt-2">
                            <ul class="list-unstyled d-flex">
                                <li class="youtube rounded-pill me-1">
                                    <a class="icon-header text-white d-flex align-items-center justify-content-center" href=""><i class="fa-brands fa-youtube"></i></a>
                                </li>
                                <li class="linkdin rounded-pill me-1 ">
                                    <a class="icon-header text-white d-flex align-items-center justify-content-center" href=""><i class="fa-brands fa-linkedin"></i></a>
                                </li>
                                <li class="facebock rounded-pill me-1 ">
                                    <a class="icon-header text-white d-flex align-items-center justify-content-center" href=""><i class="fa-brands fa-facebook"></i></a>
                                </li>
                                <li class="telegram rounded-pill me-1 ">
                                    <a class="icon-header text-white d-flex align-items-center justify-content-center" href=""><i class="fa-brands fa-telegram"></i></a>
                                </li>
                                <li class="bg-primary rounded-pill me-1 ">
                                    <a class="icon-header text-white d-flex align-items-center justify-content-center" href=""><i class="fa-brands fa-discord"></i></a>
                                </li>
                            </ul>  
                    </div>
                </div>
            </div>
        </div>
    </section>
`+
                                '<div class="container">' +
                                '<div class="row align-items-center justify-content-around mt-5">' +
                                '<div class="col-lg-3">' +
                                '<img class="img-fluid " src="' + product.image + '" alt="' + product.title + '">' +
                                '</div>' +
                                '<div class="col-lg-4">' +
                                '<h3>' + product.title + '</h3>' +
                                '<p>قیمت: ' + product.price + ' تومان</p>' +
                                '<p>دسته بندی: ' + product.category + '</p>' +
                                '<p>توضیحات: ' + product.description + '</p>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</body></html>'                
                                );
                    },
                });
            });
            
        }
    });
    // category
    $.ajax({
        url: 'https://fakestoreapi.com/products/categories',
        type: 'GET',
        success: function(categories) {
            let $categoriesList = $('#categoriesList');
            $.each(categories, function(index, category) {
                
                $categoriesList.append('<li><a class="dropdown-item category-item d-flex flex-column " data-category="' + category + '">' + category + '</a></li>');
            
            });

            $('.category-item').click(function() {
                let category = $(this).data('category');
                let productUrl = 'https://fakestoreapi.com/products/category/' + category;

                let newWindow = window.open('', '_blank');
                newWindow.document.write(
                '<html>'+
                '<head>'+
                 '<link rel="stylesheet" href="style/bootstrap.rtl.css" />'+
                 ' <link rel="stylesheet" href="style/style.css" />'+
                 '<title>محصولات - ' + category + '</title></head>'+  
                 '<body>'+
                 
                 '</body>'+
                 '</html>'
                 
                 );

                 $.ajax({
                    url: productUrl,
                    type: 'GET',
                    success: function(products) {
                        let productList = '<div class="container-fluid"> <div class="row">'; 
                        $.each(products, function(index, product) {
                            productList += '<div class=" col-lg-2 height-category" >';
                            productList += '<h6>' + product.title + '</h6>';
                            productList += '<img class="img-category" src="' + product.image + '" alt="' + product.title + '">';
                            productList +='</div>';
                        });
                        productList += '</div> </div>'; 
                        newWindow.document.body.innerHTML = productList;
                    },
                });
            });
        },
    });
});
