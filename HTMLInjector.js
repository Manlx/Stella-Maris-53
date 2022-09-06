function load_js(Path)
{
    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.src= Path;
    head.appendChild(script);
}

function load_css(Path)
{
    var head= document.getElementsByTagName('head')[0];
    var cssLink= document.createElement('link');
    cssLink.href= Path;
    cssLink.rel= "stylesheet";
    head.appendChild(cssLink);
}

function LocalInclude() {
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        Folder = elmnt.getAttribute("Path");
        Comp = elmnt.getAttribute("CompName");
    }
}

function includeHTML() {
    var z, i, elmnt, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        Folder = elmnt.getAttribute("Path");
        Comp = elmnt.getAttribute("CompName");
        if (Folder) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
            if (this.status == 200) {
                elmnt.innerHTML = this.responseText;
                load_css(`${Folder}/${Comp}.css`)
                load_js(`${Folder}/${Comp}.js`)
            }
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                elmnt.removeAttribute("Path");
                includeHTML()
            }
        }
        xhttp.open("GET", `${Folder}/${Comp}.html`, true);
        xhttp.send();
        return;
        }
    }
}