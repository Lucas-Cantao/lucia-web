
let text = document.querySelector("#text");
let texto = text.innerHTML;
let index = 0;

const escrever = () => {
    text.innerHTML = text.innerHTML.replace("|", "");
    if(texto.length > index){
        if(index == 0){
            text.innerHTML = texto.charAt(index);
        } else{
            text.innerHTML += texto.charAt(index);
        };
        text.innerHTML += '|';
        index++;
        setTimeout(escrever, 60 );
    }
};

escrever();

const mostrar = () => {
    document.querySelector(".tela_logar").style.display = "block";
};

document.querySelector("#tela_login").addEventListener("click", () => {
    document.querySelector(".tela_logar").style.display = "none";
});


const logins = [
    {
        ra: "0001113355839sp",
        nome: "Lucas Cantão Oliveira Santos",
        senha: "123456789"
    },
    {
        ra: "0001113355838sp",
        nome: "Lucas",
        senha: "123456789"
    }
];


const signup = document.querySelector(".button_signup");
const signin = document.querySelector(".button_signin");

signup.addEventListener("mouseover", () => {
    signin.classList.add("branco");
});
signup.addEventListener("mouseout", () => {
    signin.classList.remove("branco");
});
signin.addEventListener("mouseover", () => {
    signup.classList.add("roxo");
});
signin.addEventListener("mouseout", () => {
    signup.classList.remove("roxo");
});

const ra = document.querySelector("#ra");
const nome = document.querySelector("#nome");
const senha = document.querySelector("#senha");
const checkSenha = document.querySelector("#checkSenha");

const addLogin = () => {
    const Ra = ra.value + "sp";
    for(let i = 0; i < logins.length; i++){
        if(Ra == logins[i].ra || nome.value == logins[i].nome){
            alert("Usuário já cadastrado");
            break;
        }else{
            if(senha.value != checkSenha.value){
                alert("As senhas não coincidem, tente novamente!");
                break;
            }else{
                alert("Usuário cadastrado com sucesso");
                logins[logins.length] = 
                {
                    ra: Ra,
                    nome: nome.value,
                    senha: senha.value
                }
                break;
            }
        }
    }
};

const loginRA = document.querySelector("#loginRA");

const loginSenha = document.querySelector("#loginSenha");





const logar = () => {
    
    for(let i = 0; i < logins.length; i++){
        if(loginRA.value === logins[i].ra && loginSenha.value === logins[i].senha){
            alert("Usuário logado com sucesso");
            break;
        }else{
            alert("Credenciais incorretas, tente novamente");
            break;
        }
    }
};