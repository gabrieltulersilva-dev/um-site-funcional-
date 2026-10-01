const senhac = "1234"
const usuario = "admin"
let erros = 0

const text = document.getElementById("text")
const password = document.getElementById("password")
const h1 = document.getElementById("h1")
const button = document.getElementById("button")
const theme = document.getElementById("theme")
const criar = document.getElementById("criar")

document.getElementById("button").onclick = pega

function pega() {
    let senha = password.value;
    let nomi = text.value;

    
    if (erros >= 3) {
        h1.innerText = "Acesso bloqueado, espere um pouco";
        h1.style.color = "brown";
        return; 
    }

    
    if (senha === senhac && nomi === usuario) {
        h1.innerText = "Usuario encontrado e senha correta";
        h1.style.color = "chartreuse";
        erros = 0; 
    } else {
       
        erros++; 
        h1.innerText = "Usuario ou senha incorretos";
        h1.style.color = "orange";
    }
}
