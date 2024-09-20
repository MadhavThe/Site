// Switch between Sign In and Register forms
document.getElementById("to-signin").addEventListener("click", function() {
    document.getElementById("register-box").classList.add("hidden");
    document.getElementById("signin-box").classList.remove("hidden");
});

document.getElementById("to-register").addEventListener("click", function() {
    document.getElementById("signin-box").classList.add("hidden");
    document.getElementById("register-box").classList.remove("hidden");
});

// Handle Registration
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("reg-username").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    
    if (username && email && password) {
        alert("Registered successfully!");
        document.getElementById("register-form").reset();
    }
});

// Handle Sign In
document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const usernameOrEmail = document.getElementById("signin-username").value;
    const password = document.getElementById("signin-password").value;
    
    if (usernameOrEmail && password) {
        alert("Signed in successfully!");
        document.getElementById("signin-form").reset();
    }
});
