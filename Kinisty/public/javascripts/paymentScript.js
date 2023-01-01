let a;
function show_hide() {
    if (a == 1) {
    document.getElementById("content").style.display = "inline";
    document.getElementById("content2").style.display = "none";
    return (a = 0);
    } else {
    document.getElementById("content").style.display = "none";
    return (a = 1);
    }
}
let b;
function show_hide2() {
    if (b == 1) {
    document.getElementById("content2").style.display = "inline";
    document.getElementById("content").style.display = "none";
    return (b = 0);
    } else {
    document.getElementById("content2").style.display = "none";
    return (b = 1);
    }
}