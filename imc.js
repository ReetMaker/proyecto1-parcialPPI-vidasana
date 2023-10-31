function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

document.getElementById("imcform").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtiene el valor del campo de entrada y los convierte a números
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    const resultadoIMC = calcularIMC(peso, altura);
    const resul = document.getElementById("resul"); 
    resul.innerHTML = "Su IMC es: " + resultadoIMC.toFixed(2);

});


