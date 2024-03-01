let wandering = true;

function handleNoButtonClick() {
    document.getElementById('buttons2').classList.add('shake', 'wander');
    checkWandering();
}

function stopWandering() {
    wandering = false;
    setTimeout(function () {
        document.getElementById('buttons2').classList.remove('shake', 'wander');
        document.getElementById('buttons2').style.opacity = '0';
        window.location.href = "C:/Users/HP/OneDrive/Desktop/Study Material/PROJECT/SELF/Webpage/Webpage.html";
    }, 500);
}

function checkWandering() {
    if (wandering) {
        setTimeout(function () {
            document.getElementById('buttons2').classList.remove('shake', 'wander');
            handleNoButtonClick();
        }, 5000);
    }
}