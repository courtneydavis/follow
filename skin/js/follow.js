function setToShow() {
    document.getElementById('followSuccess').classList.toggle('fade');
    setTimeout("setToHide()", 4000);
}

function setToHide() {
    document.getElementById('followSuccess').classList.remove('fade');
}