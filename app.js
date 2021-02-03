const click = new Audio('./sounds/click.mp3');

window.addEventListener('keydown', (e) => {
    let keyPressed = document.getElementsByClassName(`k${e.code}`);
    click.play();
    keyPressed[0].classList.add('pressed');
    e.code == 'Tab' && e.preventDefault();
})
window.addEventListener('keyup', (e) => {
    let keyPressed = document.getElementsByClassName(`k${e.code}`);
    keyPressed[0].classList.remove('pressed');
})
