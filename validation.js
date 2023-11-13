function validateLogin() {
    var predefinedUsername = "goutham";
    var predefinedPassword = "123456";

    var inputUsername = document.getElementById("username").value;
    var inputPassword = document.getElementById("password").value;

  
    if (inputUsername === predefinedUsername && inputPassword === predefinedPassword) {
        document.getElementById("loginMessage").textContent = "login successfully";
    } else {
        document.getElementById("loginMessage").textContent = "Invalid username or password. Please try again.";
    }
}