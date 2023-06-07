const intro = document.getElementById('intro')
let boob = 0

export function handleClickIntro() {
    boob++
    console.log(boob)
}

intro.addEventListener('click', handleClickIntro())


