const iframe = document.getElementById("iframe");

//Tema
if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
}
var theme = localStorage.getItem("theme");

function changeTheme() {
    if (theme == "dark") {
        document.documentElement.style.setProperty('--cabecalho', '#161616');
        document.documentElement.style.setProperty('--principal', '#222222');
        document.documentElement.style.setProperty('--secundario', '#363636');
        document.documentElement.style.setProperty('--texto', '#ffffff');
    }
    if (theme == "light") {
        document.documentElement.style.setProperty('--cabecalho', '#ffffff');
        document.documentElement.style.setProperty('--principal', '#c9c9c9');
        document.documentElement.style.setProperty('--secundario', '#e9e9e9');
        document.documentElement.style.setProperty('--texto', '#000000');
    }
}
changeTheme();

//Mudar pagina
function changePage(page) {
    localStorage.setItem("page", "Pages/"+page+".html");
    window.parent.location.reload();
}

//Scroll
window.addEventListener("scroll", () => {
    window.parent.postMessage({ scrollY: window.scrollY }, "*");
});