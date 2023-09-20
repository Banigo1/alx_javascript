function setCookies() {
    const firstnameValue = document.getElementById("firstname").value;
    const emailValue = document.getElementById("email").value;

    document.cookie = `firstname=${firstnameValue}`;
    document.cookie = `email=${emailValue}`;
}

function showCookies() {
    const cookies = document.cookie;
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `Cookies: ${cookies}`;
    document.body.appendChild(paragraph);
}
