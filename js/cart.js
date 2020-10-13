subtotal = 
precio_envio =
premium = 0.15;
express = 0.07;
standard = 0.05;
costo_total =
envio = 0;
test=


document.getElementById("user_login").innerHTML += sessionStorage.getItem("usuario")

function logout() {
    if(window.sessionStorage != null) {
        sessionStorage.clear();
        window.location.href='login.html'
} }

function verificacion_usuario() {
    if (sessionStorage.length == 0 ) {location.replace('login.html')}
    };
    
    verificacion_usuario()
/////////////////////////////////////////////////////////////
/*  
function showProductCart(array){

        let htmlContentToAppend = "";
        for(let i = 0; i < array.length; i++){
            let cart_product = array[i];
    
            htmlContentToAppend += `
            <hr>
            
            <div id="cart_test" style="font-size:110%"><b>${cart_product.name}</b></div>
            <div>${cart_product.count}</div>
            <div>${cart_product.unitCost}</div>
            <div>${cart_product.currency}</div>
            <hr>
            `
    
            document.getElementById("cart_products_container").innerHTML = htmlContentToAppend;
        }
    }
*/
///////////////////////////////////////////////////////////////////


function showProductCart(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let cart_product = array[i];

        htmlContentToAppend += `
        <tr>
        <td><img src="` + cart_product.src + `" class="iconos_productos"></td>
        <td><b>${cart_product.name}</b></td>
        <td id="precio_items_${i}" value="${cart_product.unitCost}">${cart_product.unitCost} `+` ${cart_product.currency}</td>
        <td><input id="cantidad_items_${i}" type="number" name="cantidad"  min="1" max="999" value="${cart_product.count}" onclick="precio_articulo_subtotal(${i}); precio_subtotal_final(); click_envio(); costo_final();"></td>
        <td><div id="subtotal_articulo_${i}" value="${cart_product.unitCost * cart_product.count}">${cart_product.unitCost * cart_product.count} `+`${cart_product.currency}</div></td>
        </tr>
        `
    }
        document.getElementById("tabla_articulos").innerHTML += htmlContentToAppend;
    
}



    document.addEventListener("DOMContentLoaded", function (e) {
        getJSONData("https://japdevdep.github.io/ecommerce-api/cart/654.json").then(function(resultObj){
            if (resultObj.status === "ok")
            {
                cart_objects = resultObj.data;
                showProductCart(cart_objects.articles);
                precio_subtotal_final();
                click_envio();
                costo_final();
            }    
        });
    });




function precio_articulo_subtotal(item){
    cantidad_item_ = document.getElementById("cantidad_items_"+item).value;
    precio_item = cart_objects.articles[item].unitCost;
    precio_item_subtotal = cantidad_item_*precio_item;
    
    document.getElementById("subtotal_articulo_"+item).innerHTML = precio_item_subtotal + ` ` +cart_objects.articles[item].currency;
    document.getElementById("subtotal_articulo_"+item).value = precio_item_subtotal;

    };


function precio_subtotal_final(){
    item_0 = document.getElementById("subtotal_articulo_0").innerHTML;
    item_1 = document.getElementById("subtotal_articulo_1").innerHTML;
item_0_num = parseInt(item_0,10);
item_1_num = parseInt(item_1,10)*40;

subtotal = item_0_num+item_1_num;

document.getElementById("subtotal_final").innerHTML = subtotal +` `+ "UYU";
}


/*
function precio_envio_final(){
    if(document.getElementById("premium_radio").checked===true) {
        precio_envio = (subtotal/100)*15;
    document.getElementById("envio_final").innerHTML = precio_envio;
}
else if ()}

object.addEventListener("click",precio_envio_final);
*/

    

function click_envio(){
    if(document.getElementById("premium_radio").checked===true){
        document.getElementById("final").style.visibility = "visible";
        envio=subtotal*premium;
        document.getElementById("envio_final").innerHTML= envio +` `+ "UYU";
    }
    else if(document.getElementById("express_radio").checked===true){
        document.getElementById("final").style.visibility = "visible";
        envio=subtotal*express;
        document.getElementById("envio_final").innerHTML= envio +` `+ "UYU";
    }   
    else if(document.getElementById("standard_radio").checked===true){
        document.getElementById("final").style.visibility = "visible";
        envio=subtotal*standard;
        document.getElementById("envio_final").innerHTML= envio +` `+ "UYU";
    }
}


function costo_final(){
    document.getElementById("final").innerHTML = envio+subtotal +` `+ "UYU";
    test= envio+subtotal +` `+ "UYU";
    }



    document.addEventListener("DOMContentLoaded", function(e){
    
    });

function aguantiaaa(){
    if(test =="574539885 UYU"){
        alert("AGUANTIAAAAAA");
        window.location.href='ee.html'

    }
}