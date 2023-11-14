document.getElementById("form").style.display = "none";


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
    let openf = document.getElementById("openf");
    let formm = document.getElementById("form");
    let inputt = document.querySelectorAll("input");

    openf.addEventListener("click", () => {
        document.getElementById("form").style.display = "block";
        history.pushState({"show_form": true}, "show_form", "?show_form=true")
    });

    inputt.forEach((input) => {
      input.addEventListener("input", () => {
      save();
      console.log("Saved")
      ;})
    })

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        var slapform = new Slapform();
        slapform.submit({
        form: '5AeH5iPmD',
        data: {
            name: document.getElementById("name").value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            organization: document.getElementById('org').value,
            text: document.getElementById('text').value
        }
        })
        .then(function (response) {
        console.log('Success', response);
        history.back();
        })
        .catch(function (e) {
        console.error('Fail', e)
        })
    });
    window.addEventListener("popstate", () => {
        ff.style.display = "none";
    })
    res();
});
