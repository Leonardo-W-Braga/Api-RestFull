const userCardTemplate = document.querySelector("[data-user-template]")


fetch("http://localhost:3000/api/v1/user")
.then(res => res.json())
.then(data => {
    const card = userCardTemplate.textContent.cloneNode(true).children[0]

    console.log(card)
})