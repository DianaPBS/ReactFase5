function ProcesarRespuestas() {
    let total = 5
    let puntos = 0;

    let myForm = document.forms["Formulario"];
    let respuestasCorrectas = ["b", "b", "b", "b", "b"];

    for (let i =1; i <= total; i++) {
        if (myForm["r" + i].value == null ||
            myForm["r" + 5].value == '') {
            alert('Responda todas las preguntas ');
            return false;
        } else {
            if(myForm["r" + i].value === respuestasCorrectas[i - 1])
                puntos++;
        }
    }
    let resultado = document.getElementById('Resultado2')
    resultado.innerHTML='Obtuviste '+puntos+' puntos de ' + total + ' posibles ';
    return false;
}