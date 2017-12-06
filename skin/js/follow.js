function setToShow() {
    document.getElementById('followSuccess').classList.toggle('show');
    setTimeout("setToHide()", 2000);
}

function setToHide() {
    document.getElementById('followSuccess').classList.remove('show');
}

