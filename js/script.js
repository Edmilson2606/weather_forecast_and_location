document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab' || e.which === 9) {
        const inputsToValidate = ['cep', 'latitude', 'longitude'];
        if (inputsToValidate.includes(e.target.id)) {
            if (e.target.value === '') {
                e.preventDefault();
                let inputVar = e.target.id;
                inputVar = inputVar.toUpperCase();
                alert(`O campo ${inputVar} precisa ser informado.`);
            }
        }
    }
});

function validEmail() {
    if (email.value.length != "") {
        let email = document.getElementById("email");
        let emailTest = email.value;
        const isValid = validateEmail(emailTest);
        if(!isValid) {
            alert("O email não estar no formato correto. Ex: xxxx@xxxx.xxx");
            email = document.getElementById("email").focus();
        }
    }
}

const validateEmail = (emailTest) => {
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return regex.test(emailTest);
}

function validCEP(){
    let cep = document.getElementById("cep");
    let cepTest = cep.value;
    cepTest = cepTest.replace(/\D/g, '');
    if (cepTest === "") {
        alert("Precisa informar o CEP no formato correto. Ex: 11222333 - Somente Números.");
        cep = document.getElementById("cep").focus();
    } else {
        const isValid = validateCEP(cepTest);
        if (!isValid) {
            alert("O CEP não estar no formato correto. Ex: 11222333 - Somente Números");
            cep = document.getElementById("cep").focus();
        } 
    }
}

const validateCEP = (cepTest) => {
    const regex = /^[0-9]{8}$/;
    return regex.test(cepTest);
}

async function getAddressByCep() {
    const cep = document.getElementById('cep').value;
    if (cep != ''){
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            console.log(data);
            if (data.logradouro != undefined) {
                document.getElementById('rua').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = `${data.localidade}/${data.uf}`;
            } else {
                document.getElementById('rua').value = 'CEP não encontrado.';
                document.getElementById('bairro').value = '';
                document.getElementById('cidade').value = '';
            }
        } catch (error) {
            alert(error.message);
        }
    } else {
        alert(`Quer informação da localização? Informe o CEP!`);
        cep = document.getElementById("cep").focus();
    }
}

async function getForecast() {
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    if (lat != '' && lon != '') {
        try {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,rain`);
            const data = await response.json();
            console.log(data);  
            let date = new Date();
            let hours = String(date.getHours()).padStart(2, '0');         
            hours = parseInt(hours);
            let forecast = data.hourly.temperature_2m[hours]
            forecast = parseInt(forecast);
            document.getElementById('forecast').innerHTML = `${forecast}° C`;
        } catch (error) {
            alert(error.message);
        }
    } else {
        alert(`Quer informação da previão do tempo? informe a Latitude e Longitude!`);
        latitude = document.getElementById("latitude").focus();
    }
}
