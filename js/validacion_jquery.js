
/*
Validaciones
-1. crea un formulario típico de login en el HTML, con dos campos usuario y contraseña
-2. Haz que cuando se pulse el botón de enviar el formulario valide si el nombre de usuario y la contraseña están rellenados o no y sólo si es así deje enviar el formulario, en caso contrario deberá informar al usuario de qué campo o campos faltan por rellenar.
-3. Haz el típico formulario de registro con los campos: nombre, email, repetir email, contraseña, repetir contraseña y aceptar condiciones del servicio. Con el botón de enviar el formulario
4. Valida el formulario, haciendo que el nombre tenga al menos 2 caracteres y sea requerido, el email sea valido y coincida en ambos campos, la contraseña tenga al menos 8 caracteres y coincidan y haya aceptado las condiciones del servicio.
(validador equalTo())
*/

function init(){
    console.log("Dom cargado");
    //2
    $("#miformulario").validate({
        rules:{
            usuario: "required",
            password:{
                required: true,
                password: true // Indica que es de tipo password
            }
        },
        messages:{
            usuario: "Por favor coloca un nombre válido.",
            password: "Por favor coloca una clave válida."
        },
        submitHandler: function(form){
            form.submit();
        }
    });

    $("#otroformulario").validate({
        rules:{
            nombre:{
                required: true,
                minlenght: 2
            } ,
            email:{
                required: true,
                email: true // Indica que es de tipo password
            },
            rep_mail:{
                required: true,
                equalTo: "#email"
            },
            clave:{
                required: true,
                minlenght: 8,
                equalTo: "#email"
            },
            rep_clave:{
                required: true,
                equalTo: "#clave"
            },
            terminos:{
                required: true
            }
        },
        messages:{
            nombre: "Coloca un nombre con al menos 2 caracteres",
            email: "Por favor coloca un nombre válido.",
            clave: "Por favor coloca una clave válida."
        },
        submitHandler: function(form){
            form.submit();
        }
    });





}

$("document").ready(init);