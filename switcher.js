const checkbox = document.getElementById('checkbox');
let isLight = 0;

checkbox.addEventListener('change', () => {
    if (isLight == 0) {
        $('link[href="css/dark.css"]').attr("href","css/light.css");
        isLight = 1
    } else {
    $('link[href="css/light.css"]').attr("href","css/dark.css");
    isLight = 0
    }
    });