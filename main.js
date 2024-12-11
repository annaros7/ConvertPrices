function calcular() {
    let v1 = document.getElementById('valor1');
    let v2 = document.getElementById('valor2');
    let gerar = document.getElementById('gerador');
    let res = document.getElementById('res');
    let n1 = Number(v1.value);
    let n2 = Number(v2.value);

    let varFinal = (n1*1000)/n2;

    let varFinalArred = varFinal.toFixed(2)

    res.innerHTML = "R$" + varFinalArred;
}

function copyText() {
    let copyArea = document.getElementById('res').innerHTML;
    navigator.clipboard.writeText(copyArea);
}