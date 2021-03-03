let users = [];


fetch("http://127.0.0.1:5000/list-users/")
    .then((response) =>response.json())
    .then((data) => {
    console.log(data);
    users = data;
});

function login(){
    let inputs = document.getElementsByTagName("input");
    
    let username = inputs[0].value;
    let password = inputs[1].value;

    let log = users.filter(user => {
        return user.username == username && user.password == password ?true : false;
    })

    console.log(log);

    if (log.length > 0) {
        alert("You have successfully logged in");
        window.location.href = "./home.html";
    }else{
        alert("Please enter a valid username and password");
    }
}
    
        