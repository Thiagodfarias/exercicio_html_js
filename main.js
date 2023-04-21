function validarFormulario(event) {
    event.preventDefault();

    var campoA = document.getElementById("campoA").value;
    var campoB = document.getElementById("campoB").value;

    if (campoB <= campoA) {
        document.getElementById("mensagem").innerHTML = "O valor de B deve ser maior que o valor de A.";
    } else {
        document.getElementById("mensagem").innerHTML = "Formulário válido!";
    }
}