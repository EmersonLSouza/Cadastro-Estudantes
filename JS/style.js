// CRIANDO UMA VARIÁVEL GLOBAL 

let estudantes = [];

// CRIANDO UMA ARRAY

function AddEstudante(){
    let estudante = {

        "nome": document.getElementById("nome").value,
        "matricula": document.getElementById("matricula").value,
        "nascimento":document.getElementById("nascimento").value,
        "email":document.getElementById("email").value,
        "curso":document.getElementById("curso").value,
        "sexo":document.getElementById("sexo").value,
        

    }
    console.log(estudante);
    LimparCampos();
}


// CRIANSO VISUALIZAÇÃO DA ARRAY

function ViewEstudante(){
    console.log(estudantes);
}

// CRIANDO VARIÁVEL PARA LIMPAR OS CAMPOS

function LimparCampos(){

    document.getElementById("nome").value = "";
    document.getElementById("matricula").value = "";
    document.getElementById("nascimento").value = "";
    document.getElementById("email").value = "";
    document.getElementById("curso").value = "";
    document.getElementById("sexo").value = "";
}

// ARRAY PARA EXIBIR TODOS OS NOMES CADASTRADOS

function ViewName(){
 
    for(let i = 0; i < estudantes.length; i ++){
        console.log(estudantes[i].nome);
    }
}
