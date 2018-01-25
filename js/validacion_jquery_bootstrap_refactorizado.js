
/*
Authors:
ER
*/
function validate(identificativo){
       var resultado = [];
       var validos = 0;
        var invalidos = 0;
        var form=$(identificativo);
        var misinput=identificativo+ " input";
        var input = $(misinput);
        console.log(input);
        input.each(function(i){
            if(input[i].validity.valid){
                resultado.push(input[i].validity.valid);
                console.log(input[i].validity.valid,this)
            }else{
                resultado.push(input[i].validity.valid);
                form.addClass("was-validated");
                console.log(input[i].validity.valid,this)
            }
        });
        
        console.log(resultado);

        for(resul in resultado){
            if(resultado[resul] === true){
                validos++
            }else{
                invalidos++
            }
        }
        console.log(validos, invalidos);

        if (validos == resultado.length){
            form.submit();
        }else{
            console.log("No esta validado el formulario");
        }
        resultado =[];
        validos = 0;
        invalidos = 0;
    }

function prevent(event){
        console.log("prevent");
        event.preventDefault();
        validate("#formulario1");
}
function init() {
    console.log("dom cargado");
    console.log($("#formulario1 input")[0].validity.valid);
    $("#enviar").click(prevent);
}

$(document).ready(init);