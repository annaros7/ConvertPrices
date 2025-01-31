function calcularSomaSub() {
    let v1 = document.getElementById('valor1');
    let gerar = document.getElementById('gerador');
    let resSoma = document.getElementById('resSoma');
    let resSub = document.getElementById('resSub');
    let n1 = Number(v1.value);

    let calculoSoma = n1 + n1 * 0.1;

    let varFinalArredSoma = calculoSoma.toFixed(2)

    resSoma.innerHTML = "R$" + varFinalArredSoma;

    let calculoSub = n1 - n1 * 0.1;

    let varFinalArredSub = calculoSub.toFixed(2)

    resSub.innerHTML = "R$" + varFinalArredSub;
}
