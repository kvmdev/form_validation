const confirmEmail = document.getElementById('email_confirm');

function emailValidation() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');

    if (email !== confirmEmail.value) {
        if (message.childNodes.length == 1) {
            const td = document.createElement("td");
            td.textContent = "El correo puesto no es el mismo";
            td.classList.add("incorrect");
            message.appendChild(td);
        }
        
    } else {
        const toRemove = message.children[0];
        message.removeChild(toRemove);
    }
};

confirmEmail.addEventListener('input', emailValidation);