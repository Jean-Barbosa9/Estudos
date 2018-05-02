var campoFiltro = qS('#busca');
campoFiltro.addEventListener('input',function() {
    var pacientes = document.querySelectorAll('.paciente');
    if(this.value.length > 0){
        pacientes.forEach(paciente => {
            var tdNome = paciente.querySelector('.info-nome'),
            nome = tdNome.textContent,
            regex = new RegExp(this.value,'i');
            if (!regex.test(nome)){
                paciente.classList.add('hide');
            }else{
                paciente.classList.remove('hide');
            }
        });
    }else{
        pacientes.forEach(paciente => {
            paciente.classList.remove('hide');
        });
    }
});

