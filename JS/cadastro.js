function cadastrar() {
    const usuario = document.getElementById("Usuario").value.trim();
    const email = document.getElementById("EMAIL").value.trim();
    const senha = document.getElementById("Senha").value.trim();
    const confirmar = document.getElementById("Confirmar_senha").value.trim();

    if (usuario === "" || email === "" || senha === "" || confirmar === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (senha !== confirmar) {
        alert("As senhas não coincidem!");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const emailExiste = usuarios.find(u => u.email === email);

    if (emailExiste) {
        alert("Esse e-mail já está cadastrado!");
        return;
    }

    usuarios.push({ usuario, email, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "tela_de_login.html";
}