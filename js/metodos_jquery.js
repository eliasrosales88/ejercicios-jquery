/*
1. Crea un fichero dom.html e incluye Jquery
2. Incluye un párrafo en el html, y luego modifica el contenido del párrafo desde Jquery.
3. Inserta otro párrafo al final del body con Jquery
4. Inserta un párrafo entre los dos párrafos anteriores y colócale un texto con Jquery
5. Modifica el color de fondo del último párrafo del HTML con Jquery
6. Añade un id al último párrafo desde Jquery
7. Quita el id al último párrafo desde Jquery
8. Asigna la clase rojo al último párrafo
9. Imprime por consola las clases que tiene asignadas el último párrafo
10. Coloca un formulario de login en el HTML
11. Asigna un id al campo nombre
12. imprime por consola el valor del campo nombre
*/

function init(){
    console.log("DOM Cargado");
    $("p").html("Este es un parrafo modificado");
    $("body").append("<p>Este es otro parrafo con append</p>");
    $("#parrafo1").after("<p>un parrafo con after entre dos parrafos</p>")//4
    $("body :last-child").css("background-color","red");//5
    $("body :last-child").attr("id", "ultimo_id");//6
    $("body :last-child").removeAttr("id");//7
    $("body :last-child").attr("class","roja");//8
    console.log($("body :last-child").attr("class"));//9
    $("form").append("<input type='text'/>");
    $("form input").attr("id","id_campo");//11
    $("form input").attr("value","valor del campo");//11

    $("body").append("<div> Este es un div</div>");
    $("body div").attr({'id':'midiv', 'class':'azul'});

    var valor= $("#id_campo").val();
    console.log(valor);

}
$("document").ready(init);