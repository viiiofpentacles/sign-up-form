

function confirmPassword() {

    let pwd1 = document.getElementById("password");
    let pwd2 = document.getElementById("cfm_pwd");
    let errorMessage = document.getElementById("errorMessage");

    if (pwd1.value != pwd2.value) {
        pwd1.style.borderColor = "red";
        pwd2.style.borderColor = "red";
        errorMessage.innerHTML = "*Passwords do not match.";
        errorMessage.style.color = "red";
    }

    else if ((pwd1.value == pwd2.value) && pwd1.value != "") {
        pwd1.style.borderColor = "green";
        pwd2.style.borderColor = "green";
        errorMessage.innerHTML = "";
    }

    else {
        pwd1.style.borderColor = "rgb(201, 201, 201)";
        pwd2.style.borderColor = "rgb(201, 201, 201)"
        errorMessage.innerHTML = "";
    }
}
