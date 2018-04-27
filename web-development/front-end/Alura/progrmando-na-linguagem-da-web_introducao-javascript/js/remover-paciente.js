var tabela = qS('#tabela-pacientes');
tabela.addEventListener('dblclick',function(event){
    event.target.parentNode.classList.add('up');
    setTimeout(() => event.target.parentNode.remove(),1000)
});