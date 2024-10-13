const form = document.getElementById('form-contato')
const nomeCompleto = document.getElementById('nome-completo')
const telDDD = document.getElementById('telDDD');
const numeroTelefone = document.getElementById('telefone');
const email = document.getElementById('email1');

const nomes = [];
const telefones = [];
const emails =[];


let linhas ='';

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.trim().split(' ');
    return nomeComoArray.length >=2;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validaNome(nomeCompleto.value)) {
        alert('Insira nome completo, pelo menos dois nomes.');
        return;
    }

    adicionaLinha();
    atualizaLista();  

})

function adicionaLinha(){

    if(nomes.includes(nomeCompleto.value) || telefones.includes(numeroTelefone.value) || emails.includes(email.value)) {
        alert(`ALGUM DESSES DADOS: NOME / TELEFONE / E-MAIL JÁ FOI CADASTRADO!!!`);
    }else {
    nomes.push(nomeCompleto.value);
    telefones.push(numeroTelefone.value);
    emails.push(email.value);

 

    let info = `<tr>`;
        info += `<td>${nomeCompleto.value}</td>`;
        info += `<td>(${telDDD.value}) ${numeroTelefone.value}</td>`;
        info += `<td>${email.value}</td>`;
        info += `</tr>`;

    linhas += info;

    nomeCompleto.value ='';
    telDDD.value ='';
    numeroTelefone.value ='';
    email.value ='';
    }
}

function atualizaLista() {
    const tabelaContatos = document.querySelector('tbody');
    tabelaContatos.innerHTML = linhas;
}