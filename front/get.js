function getUser() {
    const id = document.getElementById("ID-get")
    fetch(`http://localhost:3000/api/v1/user/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }