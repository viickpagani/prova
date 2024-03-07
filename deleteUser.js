function deleteUser(id) {
    return fetch(`https://gorest.co.in/public/v2/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 8e38977c0a8dffac468ba068fdfc9452c9e1cbb4505c16e287941e613a7ef317"
        }
    }).then(data => console.log("Usuário deletado com sucesso!"))
        .catch(error => console.log("Error: ", error))
}

module.exports = deleteUser;