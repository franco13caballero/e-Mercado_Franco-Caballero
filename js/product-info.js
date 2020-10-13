var ProductInfoArray = [];
var ProductInfoImagenArray = []
var ScoreInfoArray = []

function verificacion_usuario() {
    if (sessionStorage.length == 0 ) {location.replace('login.html')}
    };
    
    
    verificacion_usuario();
    
    document.getElementById("user_login").innerHTML += sessionStorage.getItem("usuario")
    

function showProductInfo(){

    let htmlContentToAppend = "";

            htmlContentToAppend += `
            <div id="product_info_name" style="font-size:150%"><b> ${ProductInfoArray.name}</b></div>
 <div id="product_info_soldCount">Nuevo - ${ProductInfoArray.soldCount} vendidos</div>

            <hr>
            <div id="product_info_description"> ${ProductInfoArray.description}</div>
            <hr>
            <div id="product_info_category" style="font-size:80%;">Categoría > ${ProductInfoArray.category} > Chevrolet</div> 
            <h4 style="font-style:italic; font-size:100%; text-align:right">`+ ProductInfoArray.cost +` ` + ProductInfoArray.currency + `</h4>
            `
        document.getElementById("product_info_container").innerHTML = htmlContentToAppend;
    }

    
    function showImagesGalleryProduct(array){

        let htmlContentToAppend = "";
    
        for(let i = 0; i < array.length; i++){
            let imageSrc = array[i];
    
            htmlContentToAppend += `
            <div class="">
                <div class="">
                    <img class="img-thumbnail" src="` + imageSrc + `" alt="">
                </div>
            </div>
            `
    
            document.getElementById("product_imagen").innerHTML = htmlContentToAppend;
        }
    }


    
    function showImagesGalleryProduct(array){

        let htmlContentToAppend = "";
    
        for(let i = 0; i < array.length; i++){
            let imageSrc = array[i];
    
            htmlContentToAppend += `
            <div class="carousel-item centrar">
            <img src="` + imageSrc + `" class="main_login_0" width="40%" alt="...">
          </div>
            `
    
            document.getElementById("carrusel_imagenes").innerHTML = htmlContentToAppend;
        }
    }




    function showCommentsList(array){
        let htmlContentToAppend_comments = "";
    
        for(let i = 0; i < array.length; i++){
            let comments_array = array[i];

            htmlContentToAppend_comments += `
           
            <div id="product_info_name" style="font-size:110%"><b>${comments_array.user}</b></div>
            <div id="product_info_soldCount">${comments_array.score}/5</div>
            <div id="product_info_description">${comments_array.description}</div>
            <div id="product_info_category" style="font-size:75%; font-style:italycs;">Fecha de publicación: ${comments_array.dateTime}</div> 
            <hr>
            `
            document.getElementById("comentarios_existentes").innerHTML = htmlContentToAppend_comments;
        }
    };


    function resaltarEstrellas(array) {
        let stars = '';
        let golden_stars = 0;
        while (golden_stars < array.score) {
            stars += '<span class="fa fa-star checked"></span>';
            golden_stars ++;
        }
        while ((5-golden_stars) > 0) {
            stars += '<span class="far fa-star checked"></span>';
            golden_stars ++;
        }
        return stars;
    }


    function showCommentsList(array){
        let htmlContentToAppend_comments = "";
    
        for(let i = 0; i < array.length; i++){
            let comments_array = array[i];

            htmlContentToAppend_comments += `
            <div>${resaltarEstrellas(comments_array)} </div>
            <div id="product_info_name" style="font-size:110%"><b>${comments_array.user}</b></div>
            <div id="product_info_soldCount">${comments_array.score}/5</div>
            <div id="product_info_description">${comments_array.description}</div>
            <div id="product_info_category" style="font-size:75%; font-style:italycs;">Fecha de publicación: ${comments_array.dateTime}</div> 
            <hr>
            `
    
            document.getElementById("comentarios_existentes").innerHTML = htmlContentToAppend_comments;
        }
    }

    function productosRelacionados(array, cantidad){

        let htmlContentToAppend = "";
    
        for(let i = 0; i < cantidad.length; i++){
            let x = cantidad[i];
            let producto_rel = array[x]

            htmlContentToAppend += `
<div class="btn_n"><div><b>${producto_rel.name}</b></div>
<img class="size_image" src="` + producto_rel.imgSrc + `" alt=""></div>
            `
            document.getElementById("productsRelated").innerHTML = htmlContentToAppend;
            
        }
    }

/*
    function nuevo_comentario(){

        let htmlContentToAppend = "";
    
            htmlContentToAppend += `
            <div id="product_info_name" style="font-size:110%"><b>${sessionStorage.getItem("usuario")}</b></div>
            <div id="product_info_soldCount">${sessionStorage.getItem("estrellas")}/5</div>
            <div id="product_info_description">${sessionStorage.getItem("comment_usuario")}</div>
            <hr>
            `
            document.getElementById("comentar").innerHTML = htmlContentToAppend;
        }
 */


    document.addEventListener("DOMContentLoaded", function (e) {
        getJSONData("https://japdevdep.github.io/ecommerce-api/product/5678.json").then(function(resultObj){
            if (resultObj.status === "ok")
            {
            ProductInfoArray = resultObj.data;
            showProductInfo(ProductInfoArray);
            let cantidad_productos_relacionados = ProductInfoArray.relatedProducts


            getJSONData(PRODUCTS_URL).then(function(resultObj){
                if(resultObj.status === "ok")
                {
                relatedProducts = resultObj.data;
                }
                productosRelacionados(relatedProducts, cantidad_productos_relacionados);

                });
            }
            hideSpinner();
        })
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if(resultObj.status === "ok")
        {
        commentsArray = resultObj.data;
        showCommentsList(commentsArray);  
        }
        });


        getJSONData("https://japdevdep.github.io/ecommerce-api/product/5678.json").then(function(resultObj){
            if(resultObj.status === "ok")
            {
            productImageArray = resultObj.data;
            showImagesGalleryProduct(productImageArray.images);
            }
            });

    });





    
// ENVIAR COMENTARIO
 /*   document.getElementById("enviar_comentario").onclick = nuevo_comentario();
*/




/*
var puntaje = document.getElementById("puntaje").value;    var mensaje = document.getElementById("mensaje").value;
function currentDate() {    var today = new Date();    var dd = String(today.getDate()).padStart(2, '0');    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!    var yyyy = today.getFullYear();    var hh = today.getHours();    var min = ('0' + today.getMinutes()).slice(-2);    var ss = today.getSeconds();    today = yyyy + '-' + mm + '-' + dd + '  ' + hh + ':' + min + ':' + ss ;    return today}
*/

function logout() {
    if(window.sessionStorage != null) {
        sessionStorage.clear();
        window.location.href='login.html'
} };

