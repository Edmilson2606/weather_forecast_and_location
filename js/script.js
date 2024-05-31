// document.getElementById("first-name").addEventListener("change", validName);

// document.getElementById("form").addEventListener("submit", function(event) {
//     let firstName = document.getElementById("first-name");
//     if (firstName.value.length < 3 || firstName.value.length === " ") {
//         event.preventDefault();
//         alert("O nome deve ter pelo menos 3 caracteres.");
//         firstName = document.getElementById("first-name").focus();
//     }
// });

function validName() {
    let firstName = document.getElementById("first-name");
    if (firstName.value.length < 3 || firstName.value.length === " "){
        alert("O nome deve ter pelo menos 3 caracteres.");
        firstName = document.getElementById("first-name").focus();
    }    
}    

function validEmail() {
    let email = document.getElementById("email");
    if (email.value.length === " ") {
        alert("O email deve estar no formato correto.");
        email = document.getElementById("email").focus();
    }
}

function validCEP(){
    let cep = document.getElementById("cep");
    if (cep.value.length < 8) {
        alert("O CEP deve estar no formato correto.");
        cep = document.getElementById("cep").focus();
    } 
}


async function getAddressByCep() {
    const cep = document.getElementById('cep').value;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data);
        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = `${data.localidade}/${data.uf}`;
    } catch (error) {
        alert(error.message);
    }
}

async function getPrevisao() {
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,rain`);
        const data = await response.json();
        console.log(data);
        
        let date = new Date();
        // let day = String(date.getDate()).padStart(2, '0');
        // let month = String(date.getMonth() + 1).padStart(2, '0'); 
        // let year = date.getFullYear()
        let hours = String(date.getHours()).padStart(2, '0');         
        hours = parseInt(hours);
        // console.log(hours);

        let forecast = data.hourly.temperature_2m[hours]
        forecast = parseInt(forecast);

        // document.getElementById('resposta').innerHTML = "";
        // document.getElementById('resposta').innerHTML = `<div>${day}/${month}/${year} - ${hours}h - ${data.hourly.temperature_2m[hours]}° C</div>`;

        document.getElementById('forecast').innerHTML = `${forecast}° C`;
    } catch (error) {
        alert(error.message);
    }
}
