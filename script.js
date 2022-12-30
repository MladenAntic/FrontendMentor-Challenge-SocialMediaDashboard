const themeStylesheet = document.getElementById('theme')
const slider = document.querySelector('.slider')
const positionDark = document.querySelector('.position-dark')
const positionLight = document.querySelector('.position-light')
const toggler = document.querySelector('.toggler')

positionDark.addEventListener('click', () => {
    toggler.style.transform = 'translateX(0)'
})

positionLight.addEventListener('click', () => {
    toggler.style.transform = 'translateX(157%)'
})

let theme = localStorage.getItem('theme');

if(theme == null) {
    setTheme('dark');
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('position');

for (let i=0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        themeStylesheet.href = 'light.css';
        toggler.style.transform = 'translateX(157%)'
        slider.style.background = 'var(--toggle-light)'
    }
    if (mode == 'dark') {
        themeStylesheet.href = 'dark.css';
        toggler.style.transform = 'translateX(0)'
        slider.style.background = 'var(--toggle-dark)'
    }

    localStorage.setItem('theme', mode);
}