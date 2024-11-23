let primeiroNumero = null;
let operador = null;
let visorDeveLimpar = false;

function atualizaDisplay(valor) {
    const visor = document.getElementById("visor");

    if (visorDeveLimpar) {
        visor.value = "";
        visorDeveLimpar = false;
    }

    if (valor === "." && visor.value.includes(".")) return;

    visor.value += valor;
}

function limparVisor() {
    document.getElementById("visor").value = "";
    primeiroNumero = null;
    operador = null;
}

function definirOperador(op) {
    const visor = document.getElementById("visor");

    if (primeiroNumero === null) {
        primeiroNumero = parseFloat(visor.value);
    }

    operador = op;
    visorDeveLimpar = true;
}

function calcular() {
    const visor = document.getElementById("visor");
    const segundoNumero = parseFloat(visor.value);
    let resultado = 0;

    if (operador === "+") {
        resultado = primeiroNumero + segundoNumero;
    } else if (operador === "-") {
        resultado = primeiroNumero - segundoNumero;
    } else if (operador === "*") {
        resultado = primeiroNumero * segundoNumero;
    } else if (operador === "/") {
        if (segundoNumero === 0) {
            limparVisor();
            return;
        }
        resultado = primeiroNumero / segundoNumero;
    }

    visor.value = resultado;
    primeiroNumero = null;
    operador = null;
}

function adicionarVirgula() {
    atualizaDisplay(".");
}
