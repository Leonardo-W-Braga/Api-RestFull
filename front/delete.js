function deleteUser() {
    const id = document.getElementById("ID").value
    fetch(`http://localhost:3000/api/v1/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    alert("User successfully removed");
  }