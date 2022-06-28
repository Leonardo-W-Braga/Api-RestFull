
    let button = document.querySelector("#getAll")
    button.addEventListener("click", function(){
        fetch(" http://localhost:3000/api/v1/user")
    .then(window.open("http://localhost:3000/api/v1/user"))
    })
   
    
