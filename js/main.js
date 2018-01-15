
/*
Selecciones
1. Crea un proyecto donde poder resolver los ejercicios de esta unidad
2. Crea un selectores.html e incluye el fichero de jquery 
3. Haz que según se cargue la página saque un mensaje por consola
*/
function init(){
    console.log("DOM Cargado");

    $("p").css("background-color","yellow");
    $("#primer_p").css("background-color","blue");
    $(".segundo_p").css("background-color","red");
    $("a[href='http://google.es']").css("background-color","green");
    $("div#lista li:first").css("background-color","red");
    $("div#lista li:last").css("background-color","blue");
    $("div#lista li:nth-child(5)").css("background-color","yellow");
    $("form input").css("background-color","LightBlue");
    
}

$("document").ready(init);
/*
4.  Coloca dos párrafos en el HTML
5. Haz que los dos párrafos tengan el fondo amarillo
6. Asigna una clase al primer párrafo y un identificativo al segundo, coloca un fondo de un color distinto al primer párrafo y al segundo, 
uno por la clase y otro por el id
7. Coloca un par de enlaces en el HTML y haz que uno de ellos apunte a google, modifica el color de fondo del que apunta a google
8. Coloca un listado desordenado de 10 elementos con un texto, haz que el primero tenga fondo rojo,  el último fondo azul y el 5º tenga fondo amarillo
9. Coloca en el HTML un formulario de login, haz que todos los input tengan un fondo azul
*/

