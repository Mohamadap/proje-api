$(document).ready(function(){
    $.ajax({
        url: "https://fakestoreapi.com/products",
        type: "GET",
        success: function(products){
            $.each(products, function(index, product){
                if(index <18){
                    $("#prod").append(
                        '<div class="col-lg-2 d-flex flex-column align-items-center">' +
                            '<img class="img-fluid product-img" src="' + product.image + '" alt="' + product.title + '">' +
                            '<p class="text-muted mt-2 product-title">' + product.title + '</p>' +
                            '<p class="text-danger product-price">' + product.price + ' تومان</p>' +
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
                                '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">' +
                                '</head><body>' +
                                '<div class="container-fluid">' +
                                '<div class="row">' +
                                '<div class="col-lg-4">' +
                                '<img class="img-fluid" src="' + product.image + '" alt="' + product.title + '">' +
                                '</div>' +
                                '<div class="col-lg-4">' +
                                '<h1>' + product.title + '</h1>' +
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
    $.ajax({
        url: 'https://fakestoreapi.com/products/categories',
        type: 'GET',
        success: function(categories) {
            let $categoriesList = $('#categoriesList');
            $.each(categories, function(index, category) {
                $categoriesList.append('<a class="category-item d-flex flex-column " data-category="' + category + '">' + category + '</a>');
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
                 '<header>'+ product.category+'</header>'+
                 
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
