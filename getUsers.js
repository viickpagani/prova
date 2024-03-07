function getUser() {
    return fetch("https://gorest.co.in/public/v2/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 8e38977c0a8dffac468ba068fdfc9452c9e1cbb4505c16e287941e613a7ef317"
        }
    }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log("Error: ", error))
}

module.exports = getUser;