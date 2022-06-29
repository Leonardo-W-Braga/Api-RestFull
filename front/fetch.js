
    let buttonGet = document.querySelector("#getAll")
    buttonGet.addEventListener("click", function(){
        fetch("http://localhost:3000/api/v1/user")
        .then(window.open("http://localhost:3000/api/v1/user"))
    })

   
    
