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
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (username !== "" && email !== "" && email.match(emailRegex)) {
        window.location.href = "./pages/calculadora.html";
    } else {
        const errorModal = new bootstrap.Modal(document.getElementById("errorModal"));
        errorModal.show();
    }
});