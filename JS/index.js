
var menu = false;
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

function openMenu() {
    if (!menu) {
        overlay.style.opacity = '1';
        menu_icon.src = 'Images/menu_close.png';
        menu = true;
    } else {
        overlay.style.opacity = '0';
        menu_icon.src = 'Images/menu.png';
        menu = false;
    }
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
    if (menu) {
        localStorage.setItem("theme", (localStorage.getItem("theme") === "dark") ? "white" : "dark");
        location.reload();
    }
}

function aboutPage() {
    if (menu) {
        localStorage.setItem("page", "Pages/sobre.html");
        location.reload();
    }
}
function mapPage() {
    if (menu) {
        localStorage.setItem("page", "Pages/map.html");
        location.reload();
    }
}
function coustPage() {
    if (menu) {
        localStorage.setItem("page", "Pages/custos.html");
        location.reload();
    }
}