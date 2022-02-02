const griglia = document.getElementById('cont2');
const fine = document.getElementById('fine');

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
        node.classList.add(i)
        node.classList.add('aaa')

        node.addEventListener('click', clickStatus);
         
        griglia.appendChild(node);
    }

    function clickStatus() {
        this.classList.add('squareBG');
        this.removeEventListener('click', clickStatus)
    }
})