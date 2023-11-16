let respuesta_correctas = ["roma", "oslo", "lima", "estocolmo", "ottawa"];
let acetadas = document.getElementById("acertadas");
// Estoy recogiendo el elemento por id btn_corregir
const corregir = document.getElementById("btn_corregir")

// agrega una accion al hacer click
corregir.addEventListener("click", function () {
    //recuperando los input marcados en el HTML
    let marcados = document.querySelectorAll("input:checked")
    let valoresMarcado = [...marcados].map(marcado => marcado.value)
    let cont = 0
    
    //Compara las respuestas con los valores seleccionados.
    for (let i = 0; i < valoresMarcado.length; i++) {
        if (respuesta_correctas[i] === valoresMarcado[i]) {
            cont++
        }
    }
    acetadas.innerText = "Preguntas acertadas:" + cont
    // acetadas.innerHTML = 
});
