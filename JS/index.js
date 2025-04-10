const overlay = document.getElementById("overlay");
const menu_icon = document.getElementById("menu");

window.onload = function() {
    
    const iframe = document.getElementById("window-selec");
    setTheme();

    function setPage() {
        if (!localStorage.getItem("page")) {
            localStorage.setItem("page", "Pages/sobre.html")
        }
        var window = localStorage.getItem("page");
        iframe.src = window;
    }
    setPage();
}

function setTheme() {
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "white")
    }
    var theme = localStorage.getItem("theme");
    if (theme == "dark") {
        document.documentElement.style.setProperty('--cabecalho', '#161616');
        document.documentElement.style.setProperty('--principal', '#222222');
        document.documentElement.style.setProperty('--secundario', '#363636');
        document.documentElement.style.setProperty('--texto', '#ffffff');
    }
    if (theme == "white") {
        document.documentElement.style.setProperty('--cabecalho', '#cecece');
        document.documentElement.style.setProperty('--principal', '#888888');
        document.documentElement.style.setProperty('--secundario', '#bbbbbb');
        document.documentElement.style.setProperty('--texto', '#000000');
    }
}
function changeTheme() {
    localStorage.setItem("theme", (localStorage.getItem("theme") === "dark") ? "white" : "dark");
    location.reload();
}


//Scroll
let ultimoScroll = 0;
const header = document.getElementById("header");

window.addEventListener("message", (event) => {
  if (event.data && typeof event.data.scrollY === "number") {
    const atualScroll = event.data.scrollY;

    if (atualScroll > ultimoScroll) {
        if (window.innerWidth > 768) {
            header.style.top = "-20%";
            overlay.style.top = "-15%";
        }
    } else {
        if (window.innerWidth > 768) {
            header.style.top = "0%";
            overlay.style.top = "16%";
        }
    }

    ultimoScroll = atualScroll;
  }
});