let user = document.getElementById("formulary");

console.log(user);

let inputName = document.querySelector("#name");
let inputCpf = document.querySelector("#cpf");
let inputBirthDate = document.querySelector("#birthDate");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let inputAddress = document.querySelector("#address");
let inputNumber = document.querySelector("#number");
let inputComplement = document.querySelector("#complement");
let inputCity = document.querySelector("#city");
let inputState = document.querySelector("#state");
let inputCountry = document.querySelector("#country");
let inputZipcode = document.querySelector("#zipcode");

let post = document.querySelector("#button")

post.addEventListener("click", function(){
    alert("fui clicado")
})

let dict_values = {
    'name': inputName,
    'cpf': inputCpf,
    'birthDate': inputBirthDate,
    'email': inputEmail,
    'password': inputPassword,
    'address': inputAddress,
    'number': inputNumber,
    'complement': inputComplement,
    'city': inputCity,
    'state': inputState,
    'country':inputCountry,
    'zipCode': inputZipcode

};

let x = new XMLHttpRequest;

x.open("POST", "http://localhost:3000/api/v1/user");

x.setRequestHeader("Accept", "application/json");
x.setRequestHeader("Content-Type", "application/json");

x.onload = () => console.log(x.responseText);

x.send(dict_values);

x.send(JSON.stringify(dict_values));



