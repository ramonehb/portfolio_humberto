function validaForm() {
    //Dado inputados pelo usuário
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let assunto = document.querySelector("#inlineFormInput").value
    let msg = document.querySelector("#exampleTextarea").value
    let erro = [true, true, true, true]
    let auth = false

    //Verificação dos requisitos
    if (name == null || name == "") {
        alert("Verificar campo nome")
    } else if (name.length <= 2) {
        alert("Campo nome muito curto")
    } else {
        erro[0] = false
    }

    if (email == null || email == "") {
        alert("Verificar campo e-mail")
    } else if (email.length <= 5) {
        alert("Campo email muito curto")
    } else {
        erro[1] = false
    }

    if (assunto == null || assunto == "") {
        alert("Verificar campo assunto")
    } else if (assunto.length <= 3) {
        alert("Campo assunto muito curto")
    } else {
        erro[2] = false
    }

    if (msg == null || msg == "") {
        alert("Verificar campo mensagem")
    } else if (msg.length <= 5) {
        alert("Campo mensagem muito curto")
    } else {
        erro[3] = false
    }

    //Verifica se contem erros no formulario
    for (let c = 0; c < erro.length; c++) {
        if (erro[c]) {
            auth = false
            break
        } else {
            auth = true
        }
    }

    //Se auth for true envia o e-mail
    if (auth) {
        alert("E-mail enviado com sucesso")
    } else {
        alert("Erro ao enviar e-mail")
    }
}