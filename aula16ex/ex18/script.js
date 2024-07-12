function adicionar(chamada) {
    let num = Number(document.getElementById('num').value);
    let item = document.createElement('option');

    if (num == 0) {
        alert('[ERRO] Digite um valor por favor');

    } else if (sele.innerHTML.includes(num) == false) {
        item.text = `Valor ${num} adicionado`;
        sele.appendChild(item);
        numbers.push(num);

    } else {
        alert(`[ERRO] Valor ${num} já adicionado`);
    };
};

let sele = document.getElementById('sele');
let numbers = [];

function finalizar() {
    // Total
    var res1 = document.getElementById('res1');
    let total = numbers.length;
    if (total <= 1) {
        res1.innerHTML = `Temos o total de apenas um valor`;
    } else {
        res1.innerHTML = `Temos o total de ${total} valores`;
    };

    // Maior 
    var res2 = document.getElementById('res2');
    let maior = numbers.sort();
    res2.innerHTML = `O maior valor informado = ${maior[total-1]}`;

    // Menor
    var res3 = document.getElementById('res3');
    res3.innerHTML = `O menor valor informado = ${maior[0]}`;
 
    // Soma de todos
    var contagem = 0;
    var n1 = 0;
    var soma = 0;
    while (contagem < total) {

        if (total-contagem >= 2) {
            soma += numbers[n1] + numbers[n1+1];
        } else {
            soma += numbers[n1];
        };
        n1 += 2;
        contagem += 2;       
    };
    var res4 = document.getElementById('res4');
    res4.innerHTML = `Todos os valores somados = ${soma}`;

    // Média
    var res5 = document.getElementById('res5');
    let media = soma / total;
    res5.innerHTML = `A média dos valores = ${media}`;
};