const griglia = document.getElementById('cont2');
const regole = document.getElementById('regole');

const play = document.getElementById('play');
const select = document.getElementById('select');



play.addEventListener('click', function() {
    griglia.innerHTML = '';

    if (select.value == 'Insane') {
        var numeroCaselle = 49;
        var diff = 'Insane';
    
    } else if (select.value == 'Hard') {
        var numeroCaselle = 81;
        var diff = 'Hard';
    
    } else {
        var numeroCaselle = 100;
        var diff = 'Easy';
    }
    for (let i = 1; i <= numeroCaselle; i++) {
        const node = document.createElement('div')
        node.innerHTML = i;
        node.classList.add('square' + diff)
        regole.classList.add('none')
        node.classList.add('aaa')
        node.addEventListener('click', function() 
        {
            this.classList.add('squareBG');
        })
        griglia.appendChild(node);
    } 
})











