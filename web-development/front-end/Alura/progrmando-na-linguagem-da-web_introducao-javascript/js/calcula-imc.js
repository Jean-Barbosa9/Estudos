function qS(seletor){
    return document.querySelector(seletor);
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = (peso/(altura*altura)).toFixed(2);
    return imc;
}

var pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(function(pacientes){
    var peso = pacientes.querySelector('.info-peso').textContent,
    altura = pacientes.querySelector('.info-altura').textContent,
    tdImc = pacientes.querySelector('.info-imc'),
    pesoEhValido = pesoValido(peso),
    alturaEhValida = alturaValida(altura);
    
    if (!pesoValido){
        tdImc.textContent = 'Peso inválido!';
        pacientes.classList.add('linha-invalida');
    } else if (!alturaValida){
        tdImc.textContent = 'Altura inválida!';
        pacientes.classList.add('linha-invalida');
    } else {
        tdImc.textContent = calculaImc(peso,altura);
    }   
});

function pesoValido(peso){
    if(peso > 0 &&  peso < 1000) return true;
}

function alturaValida(altura){
    if(altura > 0 &&  altura < 3.00) return true;
}