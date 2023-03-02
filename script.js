menu = document.getElementById('ham');
ml1 = document.getElementById('ham-1');
ml2 = document.getElementById('ham-2');
ml3 = document.getElementById('ham-3');


function transform(){
    menu.classList.toggle('active');
    console.log('fwe')
    console.log(menu.classList)
    console.log(ml1.classList);
    console.log(ml2.classList);
    console.log(ml3.classList);
}

for(i = 0; i < menu.classList.length; i++){
    if(menu.classList.contains('active')) {
            ml1.classList.toggle('active-1')
            ml2.classList.toggle('active-2')
            ml3.classList.toggle('active-3')
        }
}

    