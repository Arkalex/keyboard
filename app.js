window.addEventListener('keypress', (e) => {
    let keyPressed = document.getElementsByClassName(`k${e.keyCode}`);
    console.log(e.keyCode);
    keyPressed[0].classList.add('pressed');
})
window.addEventListener('keyup', (e) => {
    let keyPressed = document.getElementsByClassName(`k${e.keyCode}`)
    keyPressed[0].classList.remove('pressed');
})
