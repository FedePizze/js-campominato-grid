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
        node.classList.add(i)
        node.classList.add('aaa')

        node.addEventListener('click', function() 
            {
                this.classList.add('squareBG');
            })

        griglia.appendChild(node);
    }

    for (let i = 0; i <= 16; i++) {
        let elements = document.querySelectorAll('.aaa')
        let random1 = Math.floor(Math.random() * elements.length);
        
        elements[random1].addEventListener('click', function() 
            {
                this.classList.add('squareBG2');
                setTimeout(() => {alert('BOOM! Hai beccato una mina')}, 200);
                setTimeout(() => {griglia.innerHTML = ''}, 1000);
            })
    }
})













