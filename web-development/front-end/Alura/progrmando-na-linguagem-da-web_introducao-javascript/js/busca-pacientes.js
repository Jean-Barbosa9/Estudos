var buscarPacientes = qS('#busca-pacientes');

buscarPacientes.addEventListener('click',function(){
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET','https://api-pacientes.herokuapp.com/pacientes');
    
    xhr.addEventListener('load',function(){
        var erroAjax = document.querySelector('#erro-ajax');
        if(xhr.status == 200){
            var pacientes = JSON.parse(xhr.responseText);
            console.log(pacientes);

            pacientes.forEach(function(paciente){
                adicionaPaciente(paciente);
            });
            
        }else{
            console.log(xhr.status);
            console.log(xhr.statusText);
            erroAjax.classList.remove('hide');
        }
    });
    
    xhr.send()

});
