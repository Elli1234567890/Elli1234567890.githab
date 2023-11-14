function save() {
    localStorage.setItem('name', document.getElementById('name').value);
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('phone', document.getElementById('phone').value);
    localStorage.setItem('org', document.getElementById('org').value);
    localStorage.setItem('text', document.getElementById('text').value);
}

function res() {
    document.getElementById('name').value = localStorage.getItem('name');
    document.getElementById('email').value = localStorage.getItem('email');
    document.getElementById('phone').value = localStorage.getItem('phone');
    document.getElementById('org').value = localStorage.getItem('org');
    document.getElementById('text').value = localStorage.getItem('text');
}


document.addEventListener("DOMContentLoaded", () => {
    let ff = document.getElementById("f");
    let openff = document.getElementById("openf");
    let formm = document.getElementById("form");
    let inputt = document.querySelectorAll("input");
    btn.addEventListener("click", () => {
        popup.style.display = "flex";
        history.pushState({"show_form": true}, "show_form", "?show_form=true")
    });

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
      saveFormValues()
      ;})
    })

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        fetch(" ", {
            method: "POST",
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    org: document.getElementById('org').value,
                    text: document.getElementById('text').value,
            })
        })
        .then((response) => {
            if(response.ok) {
                alert("Форма отправлена успешно!");
                form.reset();
                localStorage.clear();
            }
            else {
                throw new Error('Ошибка при отправке формы.');
            }
        })
        .catch((err) => {
            alert(err);
        })
        history.back();
    });
    window.addEventListener("popstate", () => {
        ff.style.display = "none";
    })
    res();
});
