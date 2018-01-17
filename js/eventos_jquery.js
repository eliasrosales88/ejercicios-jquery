/*
1.- Crea un fichero eventos.html e incluye JQuery
2.- Incluye un botón con el id miboton, haz que cuando se pulse el botón saque un mensaje por pantalla
3.- Incluye otro botón con el id otroboton, haz que cuando se pulse el botón coloque un borde de color rojo al botón
4.- Incluye otro botón con el id tercerboton, haz que cuando se pulse el botón coloque un fondo verde al botón
5.- Incluye un campo de texto con el id campo, haz que cuando adquiera el foco saque un mensaje por consola
6.- Haz que al perder el foco en el campo de texto, saque un mensaje por pantalla
7.- Incluye un formulario de login en el HTML, haz que no envíe el formulario si no se han rellenado los dos campos
8.- Coloca un botón en el HTML y haz que cuando me hagan click en el saque un mensaje por consola
9.- Coloca un enlace en el HTML a google, haz que cuando entre el ratón saque un mensaje por consola y cuando salga el ratón también
10.- Haz que cuando se salga del campo del nombre del formulario valide si está rellenado
*/

function mensajeBoton(){
    console.log("Mensaje por pantalla!");
}

function bordeVerde(){
    $(this).css("background", "green");
}

function acceso(evento){
    if ($("#usuario").val() != "" && $("#password").val() != "" ) {
        //no hago nada si todo está bien
    }else{
        evento.preventDefault();
    }
}


function init(){
    //1 y 2
    console.log("Dom cargado");
    $("#miboton").click(mensajeBoton);
    //3
    $("#otroboton").click(function(){
        $("#otroboton").css("border-color", "red");
    });
    //4
    $("#tercerboton").click(bordeVerde);
    //5
    $("#campo").focus(function(){
        console.log("Haciendo foco!");
    });
    //6
    $("#campo").focusout(function(){
        console.log("Quitando foco!");
    });
    //7
    $("#login").submit(acceso);
    //8
    $("#miotroboton").click(function(){
        console.log("Mensaje por consola");
    });
    //9
    $("#enlace").mouseover(function(){
        console.log("Adentro");
    });
    $("#enlace").mouseout(function(){
        console.log("Afuera");
    });
    //10
    /*if ($("#campo").val() = "") {
        $(this).css("border-color", "red");
    }else{
        $(this).css("border-color", "red");
    }*/
}
$("document").ready(init);