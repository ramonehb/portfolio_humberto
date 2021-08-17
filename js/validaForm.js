function validaForm(){
    
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let assunto = document.querySelector("#inlineFormInput").value
    let msg = document.querySelector("#exampleTextarea").value
    
    
    if(name == null || name == ""){
        alert("Verificar campo nome")
    }
    else if (name < 2){
        alert("Campo nome muito curto")
    }
}