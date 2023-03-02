menu = document.getElementById('ham');
ml1 = document.getElementById('ham-1');
ml2 = document.getElementById('ham-2');
ml3 = document.getElementById('ham-3');

menu.classList.toggle('active');

for(let i = menu.classList; i > menu.classList; i++) {
    if(i === 'active') {
        ml1.classList.toggle('active')   
        ml2.classList.toggle('active')   
        ml3.classList.toggle('active')   
    }
}

console.log(ml1.classList)
console.log(menu.classList)