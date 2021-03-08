function createUsers(){
    const inputs = document.getElementsByTagName("input");

    fetch("https://lit-headland-71240.herokuapp.com/add_new_user/",{
        method: 'POST',
        body: JSON.stringify({
            name: inputs[0].value,
            surname: inputs[1].value,
            email: inputs[2].value,
            username: inputs[3].value,
            password: inputs[4].value,
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((json) => {
      alert("User has been created");
      document.getElementById("reg-form").reset();
      window.location.href="./login.html";
    });
}