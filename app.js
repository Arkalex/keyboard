window.addEventListener('keydown', (e) => {
    let keyPressed = document.getElementsByClassName(`k${e.code}`);
    keyPressed[0].classList.add('pressed');
})
window.addEventListener('keyup', (e) => {
    let keyPressed = document.getElementsByClassName(`k${e.code}`);
    console.log(e.code);
    keyPressed[0].classList.remove('pressed');
})
