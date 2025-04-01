window.onload = function() {
            
    const iframe = document.getElementById("window-selec");
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "white")
    }
    var theme = localStorage.getItem("theme");

    function changeTheme() {
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
    changeTheme();

    function setPage() {
        if (!localStorage.getItem("page")) {
            localStorage.setItem("page", "Pages/sobre.html")
        }
        var window = localStorage.getItem("page");
        iframe.src = window;
    }
    setPage();

    const select_page_map = document.getElementById("select-mapa");
    const select_page_about = document.getElementById("select-sobre");
    const select_theme = document.getElementById("select-tema");

    select_page_map.onclick = function() {
        localStorage.setItem("page", "Pages/map.html");
        location.reload();
    }
    
    select_page_about.onclick = function() {
        localStorage.setItem("page", "Pages/sobre.html");
        location.reload();
    }

    select_theme.onclick = function() {
        localStorage.setItem('theme', theme === 'dark' ? 'white' : 'dark');
        location.reload();
    }
}