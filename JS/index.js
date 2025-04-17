const overlay = document.getElementById("overlay");
const menu_icon = document.getElementById("menu");

window.onload = function() {
    document.body.style.zoom = "100%";
    const iframe = document.getElementById("window-selec");
    setTheme();

    function setPage() {
        if (!localStorage.getItem("page")) {
            localStorage.setItem("page", "Pages/sobre.html")
        }
        var window_page = localStorage.getItem("page");
        iframe.src = window_page;
    }
    setPage();

    function selectPageColor() {
        document.body.style.zoom = "100%";
        const icons = document.querySelectorAll('.icon-page');
        
        if (window.innerWidth <= 768) {
            icons.forEach(el => {
                el.classList.remove('icon-color-green', 'icon-color-dark', 'icon-color-light');
                el.classList.add(theme === "dark" ? 'icon-color-dark' : 'icon-color-light');
            });
        } else {
            icons.forEach(el => {
                el.classList.remove('icon-color-dark', 'icon-color-light');
                el.classList.add('icon-color-green');
            });
        }
    }
    selectPageColor();
    window.addEventListener('resize', selectPageColor);
    
    function pressSelectPage() {
        let window_page = localStorage.getItem("page");
        console.log(window_page)
        let pagina = window_page.replace("Pages/", "").replace(".html", "");
        let select_page = document.getElementById("select-"+pagina);

        select_page.classList.add("selected_page");
        let el = document.getElementById("icon-"+pagina);
        if (window.innerWidth <= 768) {
            el.classList.remove('icon-color-green', 'icon-color-dark', 'icon-color-light');
            el.classList.add('icon-color-green');
        } else {
            el.classList.remove('icon-color-green', 'icon-color-dark', 'icon-color-light');
            el.classList.add(theme === "light" ? 'icon-color-dark' : 'icon-color-light');
        }
    }
    window.addEventListener('resize', pressSelectPage);
    pressSelectPage();
}

const swith_theme = document.getElementById("switch-theme");

function setTheme() {
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "light")
    }
    var theme = localStorage.getItem("theme");
    if (theme == "dark") {
        swith_theme.classList.add('switch-enable');
        document.documentElement.style.setProperty('--cabecalho', '#161616');
        document.documentElement.style.setProperty('--principal', '#222222');
        document.documentElement.style.setProperty('--secundario', '#363636');
        document.documentElement.style.setProperty('--texto', '#ffffff');
    }
    if (theme == "light") {
        swith_theme.classList.add('switch-disable');
        document.documentElement.style.setProperty('--cabecalho', '#cecece');
        document.documentElement.style.setProperty('--principal', '#888888');
        document.documentElement.style.setProperty('--secundario', '#bbbbbb');
        document.documentElement.style.setProperty('--texto', '#000000');
    }
}
function changeTheme() {
    localStorage.setItem("theme", (localStorage.getItem("theme") === "dark") ? "light" : "dark");
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