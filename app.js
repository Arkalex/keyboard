const click = new Audio('./sounds/click.mp3');

window.addEventListener('keydown', (e) => {
    const keyPressed = document.getElementsByClassName(`k${e.code}`);
    click.play();
    keyPressed[0].classList.add('pressed');
    e.code == 'Tab' && e.preventDefault();
})
window.addEventListener('keyup', (e) => {
    const keyPressed = document.getElementsByClassName(`k${e.code}`);
    keyPressed[0].classList.remove('pressed');
})


document.getElementById('select-style').addEventListener('change', (e) => {
    const newStyle = e.target.value;
    const rel = document.querySelector('link[theme="style"]')
    switch(newStyle){
        case 'Base':
            rel.href = './styles/base.css';
            break;
        case 'Original':
            rel.href = './styles/og.css';
            break;
    }
});
