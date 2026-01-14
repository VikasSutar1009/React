// Hardcoded credentails
const validUser = {
    username: "admin",
    password: "1234"
};

// Handle login form
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === validUser.username && password === validUser.password) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", username);
            window.location.href = "home.html";
        } else {
            document.getElementById("errorMsg").textContent = "Invalid username or password!";
        }

    });
}

// Handle home page( check login + loogout)
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    const userDisplay = document.getElementById("userDisplay");
    const username = localStorage.getItem("username");

    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "index.html";
    } else {
        userDisplay.textContent = username;
    }

    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        window.location.href = "index.html";
    });
}

