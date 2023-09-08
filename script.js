let pass = document.querySelector("form input[id='password']");
let conPass = document.querySelector("form input[id='pass-confirm']");

let invalid = document.createElement("div");
invalid.textContent = "Password does not match";
invalid.setAttribute("style", "color: red; font-size: 0.5rem;");

conPass.addEventListener("input", () => {
    if (conPass === null)
        return;

    if (pass.value !== conPass.value) {
        console.log("Doesnt match");
        conPass.setAttribute("id", "invalid");
    } else {
        conPass.removeAttribute("id", "invalid");
    }
});

