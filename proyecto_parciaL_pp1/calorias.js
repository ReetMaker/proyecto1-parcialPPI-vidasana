/*Tasa metabolica basal (TMB) para calcular despues el gasto energetico total (GET)*/ 

document.getElementById("caloform").addEventListener("submit", function(event) {
    event.preventDefault();

    function calcularTMB(peso) {
        const tmb = peso * 22;
        return tmb;
    }

    let peso = parseFloat(document.getElementById("peso").value);
    console.log(calcularTMB(peso));
    
    //OPCIONES////////////////////////////////////////////////////////////////////////////////////////////////

    const termogensis = 1.1;

    var e = document.getElementById("actividad");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    let resul = calcularTMB(peso) * e.value * termogensis;
    console.log(resul);

    const resulUno = document.getElementById("resulUno"); 
    resulUno.innerHTML = "Su Gasto energetico total es: " + resul.toFixed(2);

}); 

