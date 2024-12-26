function calcularSoma() {
    let v1 = document.getElementById('valor1');
    let gerar = document.getElementById('gerador');
    let res = document.getElementById('res');
    let n1 = Number(v1.value);

    let calculo = n1 + n1 * 0.1;

    let varFinalArred = calculo.toFixed(2)

    res.innerHTML = "R$" + varFinalArred;
}

function calcularSub() {
    let v1 = document.getElementById('valor1');
    let gerar = document.getElementById('gerador');
    let res = document.getElementById('res');
    let n1 = Number(v1.value);

    let calculo = n1 - n1 * 0.1;

    let varFinalArred = calculo.toFixed(2)

    res.innerHTML = "R$" + varFinalArred;
}
