
function init() {
    console.log("dom cargado");
    console.log($("#formulario1 input")[0].validity.valid);
    
    var form = $("#formulario1");
    var input = $("#formulario1 input");
    var enviar = $("#enviar");
    var resultado = [];
    var validos = 0;
    var invalidos = 0;
    
    
    function validar(){
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
        event.preventDefault();
        validar();

    }
    
    form.click(prevent);
}

$(document).ready(init);