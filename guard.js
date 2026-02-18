const logged = localStorage.getItem("orion_logged");

if (!logged) {
    window.location.href = "login.html";
}
