function ApenasLetras(a, t) {
    try {
        if (window.event) {
            var SoLetra = window.event.keyCode;
        } else if (a) {
            var SoLetra = a.which;
        } else {
            return true;
        }
        if (
            (SoLetra > 64 && SoLetra < 91) || 
            (SoLetra > 96 && SoLetra < 123) ||
            (SoLetra > 191 && SoLetra <= 255)
        ){
            return true;
        } else {
            return false;
        }
    } catch (err) {
        alert(err.Descricao);
    }
}
//Numeros

function SoNumeros(evt) {
    var Evento = evt || window.event;
    var chave = Evento.keyCode || Evento.which;
    chave = String.fromCharCode( chave );
    
    var calculo = /^[0-9.]+$/;

    if( !calculo.test(chave) ) {
        Evento.returnValue = false;
       if(Evento.preventDefault) Evento.preventDefault();
    }
 }
//Busca CEP

function limpformulário() {
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    } 
    else {
        limpformulário();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    var cep = valor.replace(/\D/g, '');

    if (cep != "") {

        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {

            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";

            var script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=callback';

            document.body.appendChild(script);

        } 
        else {
            limpformulário();
            alert("Formato de CEP inválido.");
        }
    } 
    else {
        limpformulário();
    }
};

//Botão Hobby

/*var btn=document.getElementById("submit")

btn.addEventListener("click", function(a){

    a.preventDefault();

    var hobby = document.getElementById("Hobby")

    const value2 = hobby.value;

    console.log(value2)

    name.value = ""
})*/


//Verificação
const form3 = document.getElementById('form3')
const hobby = document.getElementById("Hobby")
const username = document.getElementById("username")
const sobrenome = document.getElementById('sobrenome')
const cpf = document.getElementById('cpf')
const idade = document.getElementById('idade')
const datanasc = document.getElementById('datanasc')

const cep = document.getElementById('cep')
const rua = document.getElementById('rua')
const num = document.getElementById('num')
const bairro = document.getElementById('bairro')
const cidade = document.getElementById('cidade')
const uf = document.getElementById('uf')


form3.addEventListener('submit', (e) =>{
    e.preventDefault()

    const usernameValue = username.value
    const hobbyvalue = hobby.value;
    const sobrenomevalue = sobrenome.value;
    const cpfvalue = cpf.value;
    const idadevalue = idade.value;
    const datanascvalue = datanasc.value;

    const cepValue = cep.value
    const ruaValue = rua.value
    const numValue = num.value
    const bairroValue = bairro.value
    const cidadeValue = cidade.value
    const ufValue = uf.value

    //console.log(hobbyvalue)
    //console.log(usernameValue)
    checkInputs()
})

function checkInputs(){

    if(hobby.value === ''){
        errorValidation(hobby, 'Preencha este campo')
    }else{
        sucessValidation(hobby)
    }

    if (username.value === ''){
        errorValidation(username, 'Preencha este campo')
    }else {
        sucessValidation(username)
    }

    if (sobrenome.value === ''){
        errorValidation(sobrenome, 'Preencha este campo')
    }else {
        sucessValidation(sobrenome)
    }

    if (cpf.value === ''){
        errorValidation(cpf, 'Preencha este campo')
    }else{
        sucessValidation(cpf)
    }

    if (idade.value === ''){
        errorValidation(idade, 'Preencha este campo')
    }else{
        sucessValidation(idade)
    }

    if (cep.value === ''){
        errorValidation(cep, 'Preencha este campo')
    }else{
        sucessValidation(cep)
    }

    if (datanasc.value === ''){
        errorValidation(datanasc, 'Preencha este campo')
    }else{
        sucessValidation(datanasc)
    }

    if (rua.value === ''){
        errorValidation(rua, 'Preencha este campo')
    }else{
        sucessValidation(rua)
    }

    if (bairro.value === ''){
        errorValidation(bairro, 'Preencha este campo')
    }else{
        sucessValidation(bairro)
    }
    if (cidade.value === ''){
        errorValidation(cidade, 'Preencha este campo')
    }else{
        sucessValidation(cidade)
    }
    if (num.value === ''){
        errorValidation(num, 'Preencha este campo')
    }else{
        sucessValidation(num)
    }
    if (uf.value === ''){
        errorValidation(uf, 'Preencha este campo')
    }else{
        sucessValidation(uf)
    }
}

function errorValidation (input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message
    
    formControl.className = 'form-control error'
}

function sucessValidation(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}