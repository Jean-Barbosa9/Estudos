function obtemDadosPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso : form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
    
}

function preencheTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}

function criaTr(paciente){
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente','novo');
    pacienteTr.appendChild(preencheTd(paciente.nome,'info-nome'));
    pacienteTr.appendChild(preencheTd(paciente.peso,'info-peso'));
    pacienteTr.appendChild(preencheTd(paciente.altura,'info-altura'));
    pacienteTr.appendChild(preencheTd(paciente.gordura,'info-gordura'));
    pacienteTr.appendChild(preencheTd(paciente.imc,'info-imc'));
    
    return pacienteTr;
}


function validaPaciente(paciente){
    var erros = [];
    if(paciente.nome.length == 0) erros.push('O nome deve ser preenchido!');
    if(!pesoValido(paciente.peso)) erros.push('O peso informado é inválido!');
    if(paciente.peso.length == 0) erros.push('O peso deve ser informado');
    if(!alturaValida(paciente.altura)) erros.push('A altura informada é inválida!');
    if(paciente.altura.length == 0) erros.push('A altura deve ser informada!');
    if(paciente.gordura.length == 0) erros.push('O percentual de gordura deve ser informado!');
    if(paciente.gordura < 0) erros.push('O percentual de gordura informado é inválido!');
    return erros;
}

function exibeMensagemErro(erros){
    var ul = qS('#mensagens-erro');
    ul.innerHTML = "";

    erros.forEach(erro => {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

var botaoAdd = qS('#adicionar-paciente');
botaoAdd.addEventListener('click',function(e){
    e.preventDefault();
    
    var form = qS('#form-adiciona'),
    paciente = obtemDadosPaciente(form),
    pacienteTr = criaTr(paciente),
    tabela = qS('#tabela-pacientes'),
    erros = validaPaciente(paciente);
    

    if(erros.length > 0) {
        exibeMensagemErro(erros);
        return;
    }

    tabela.appendChild(pacienteTr);

    form.reset();
    qS('#mensagens-erro').innerHTML = "";
});

function required(){
    var inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('blur',function(){
            if(this.value == "" || this.value == null){
                this.classList.add('required');
                this.setAttribute('placeholder','Este campo é obrigatório');
            }else if(!(validaPaciente(obtemDadosPaciente(qS('#form-adiciona'))).length == 0)){
                input.classList.remove('required');
                input.classList.add('ok');            
            }
        });
    })
}
required();