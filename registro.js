const registrationForm = document.getElementById("register-button");

registrationForm.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const userData = {
        username: username,
        email: email
    };
    const userDataJSON = JSON.stringify(userData);
    localStorage.setItem("userData", userDataJSON);
    //
    window.location.href = "calculadora.html";
});