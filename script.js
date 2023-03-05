const menu = document.getElementById('hamburger');
const tops = document.getElementById('top');
const mid = document.getElementById('mid')
const bottom = document.getElementById('bottom')

function toggleAnime() {
    if(menu.classList.contains('active')){
        console.log('hello')
        tops.classList.toggle('active-1')
        mid.classList.toggle('active-2')
        bottom.classList.toggle('active-3')
    }else{
        menu.classList.toggle('active')
    }
}

menu.addEventListener('click', toggleAnime);