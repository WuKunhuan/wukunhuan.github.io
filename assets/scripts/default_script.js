
// Retrieve CSS stored variable
const rootStyles = getComputedStyle(document.documentElement);
function var_js(variable) {return (rootStyles.getPropertyValue(variable)); }

// Target: <textarea> elements
function autoResize(id_name) {
    const textarea = document.getElementById(id_name);
    if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = (textarea.scrollHeight + 4) + "px";
    }
}

// Input: HEX COLOR
function colorBrightnessChange(color, brightness) {

    var hex = color.replace("#", "");
    var rgb = parseInt(hex, 16);

    var r = (rgb >> 16) & 255;
    var g = (rgb >> 8) & 255;
    var b = rgb & 255;

    if (r > 255) {r = 255; }
    if (g > 255) {g = 255; }
    if (b > 255) {b = 255; }

    r = Math.floor(r * brightness);
    g = Math.floor(g * brightness);
    b = Math.floor(b * brightness);
  
    var newColor = "#" + ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
    return newColor;
}