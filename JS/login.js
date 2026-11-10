function login() {
    const email = document.getElementById("EMAIL").value.trim();
    const senha = document.getElementById("pswd").value.trim();

    if (email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const encontrado = usuarios.find(u => u.email === email && u.senha === senha);

    if (encontrado) {
        sessionStorage.setItem("usuarioLogado", JSON.stringify(encontrado));
        window.location.href = "tela_inicial.html";
    } else {
        alert("Email ou senha incorretos!");
    }
}