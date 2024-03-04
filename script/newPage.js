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
                    let productList = '<div class="container-fluid bg-white"> <div class="row">'; 
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