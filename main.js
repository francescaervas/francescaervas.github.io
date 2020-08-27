const get_url = (par) => "https://raw.githubusercontent.com/francescaervas/francescaervas.github.io/master/" + par + ".txt";

const modifyText = e => {
    document.querySelector("#sub-title").innerHTML = e.target.innerHTML;
    fetch(get_url(e.target.id))
        .then(x => x.text())
        .then(y => document.querySelector("#text").innerHTML = nl2br(y));
};

const nl2br = (str) => str.replace(/(?:\r\n|\r|\n)/g, '<br>');

window.addEventListener('DOMContentLoaded', (e) => {
    document.querySelectorAll("#nav a")
        .forEach(e => e.addEventListener("click", modifyText, false));
    document.getElementById('about-me').click();
});

