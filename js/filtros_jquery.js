/*
1. Crea un fichero filtros.html e incluye Jquery
2. Incluye 3 listados desordenado de 10 elementos de texto cada uno
3. Haz que el tercer elemento del primer listado tenga el fondo amarillo
4. Haz que el cuarto elemento del primer listado tenga el fondo amarillo, pero seleccionando primero el tercer elemento
5. Haz que el primer ul tenga un id pero entrando desde el tercer elemento
6. Haz que en el segundo listado todos los elementos tengan un fondo rojo pero entrando desde el primer elemento
*/

//3



function init (){
    console.log("Dom cargado");
    //3
    $("ul:first li").eq(2).css("background-color","yellow");
    //4
    $("ul:first li:nth-child(3)").next().css("background-color","yellow");
    //5
    $("ul:last").siblings("ul:first").attr("id", "primera");
    //6
    $("#primera").next().css("background-color","red");
}

$("document").ready(init);