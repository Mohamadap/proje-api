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
                var index = $(".product-img").index(this);
                var product = products[index];
                var newWindow = window.open('', '_blank');
            
                var newHtml =
                    '<html><head><title>' + product.title + '</title>' +
                    '<link rel="stylesheet" href="style/bootstrap.rtl.css"/>' +
                    '</head><body>' +
                    '<div class="container-fluid">' +
                    '<div class="row">' +
                    '<div class="col-lg-4">' +
                    '<img class="img-fluid" src="' + product.image + '" alt="' + product.title + '">' +
                    '</div>' +
                    '<div class="col-lg-8">' +
                    '<h1>' + product.title + '</h1>' +
                    '<p>قیمت: ' + product.price + ' تومان</p>' +
                    '<p>دسته بندی: ' + product.category + '</p>' +
                    '<p>توضیحات: ' + product.description + '</p>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</body></html>';
            
                newWindow.document.write(newHtml);
            });
            
        }
    });
});
