let admin = [];


fetch("http://127.0.0.1:5000/admin-logs/")
    .then((response) =>response.json())
    .then((data) => {
    console.log(data);
    admin = data;
});

function login(){
    let inputs = document.getElementsByTagName("input");
    
    let username = inputs[0].value;
    let password = inputs[1].value;

    let log = admin.filter(user => {
        return user.username == username && user.password == password ?true : false;
    })

    console.log(log);

    if (log.length > 0) {
        alert("You have successfully logged in");
        window.location.href= "./adminmain.html";
    }else{
        alert("Please enter a valid username and password");
    }
}