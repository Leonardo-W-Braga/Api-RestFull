
function fazPost(url, body){
   // console.log("Body = ", body)
    let request = new XMLHttpRequest;
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body));

    request.onload = function(){
        console.log(this.responseText)
    }
    return request.responseText
}






function cadastrarUsuario(){
    event.preventDefault()
    url = " http://localhost:3000/api/v1/user"
    let inputName = document.getElementById("name").value
    let inputCpf = document.getElementById("cpf").value
    let inputBirthDate = document.getElementById("birthDate").value;
    let inputEmail = document.getElementById("email").value;
    let inputPassword = document.getElementById("password").value;
    let inputAddress = document.getElementById("address").value;
    let inputNumber = document.getElementById("number").value;
    let inputComplement = document.getElementById("complement").value;
    let inputCity = document.getElementById("city").value;
    let inputState = document.getElementById("state").value;
    let inputCountry = document.getElementById("country").value;
    let inputZipcode = document.getElementById("zipCode").value;


    body = {
        "name": inputName,
        "cpf": inputCpf,
        "birthDate": inputBirthDate,
        "email": inputEmail,
        "password": inputPassword,
        "address": inputAddress,
        "number": inputNumber,
        "complement": inputComplement,
        "city": inputCity,
        "state": inputState,
        "country": inputCountry,
        "zipCode": inputZipcode
    }

    fazPost(url, body)
}



let buttonPost = document.querySelector("#post")
buttonPost.addEventListener("click", function(){
   alert("New user added")
})
