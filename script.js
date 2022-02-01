const griglia = document.getElementById('cont2');
const regole = document.getElementById('regole');
const fine = document.getElementById('fine');

const play = document.getElementById('play');
const select = document.getElementById('select');



play.addEventListener('click', function() {
    griglia.innerHTML = '';
    let click = 0;

    

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
            

        function clickStatus() {
            this.classList.add('squareBG');
            this.removeEventListener('click', clickStatus)
            click = click + 1;
            console.log(click)
        }

        griglia.appendChild(node);
    }

    for (let i = 0; i <= 16; i++) {
        let elements = document.querySelectorAll('.aaa')
        let random = Math.floor(Math.random() * elements.length);
        //console.log(random)
        
        elements[random].addEventListener('click', function() 
            {
                this.classList.add('squareBG2');
                fine.innerHTML = 'hai perso dopo ' + click + ' mosse';
                setTimeout(() => {alert('BOOM! Hai beccato una mina')}, 200);
                setTimeout(() => {griglia.innerHTML = ''}, 1000);
                setTimeout(() => {fine.innerHTML = ''}, 1000);
            })
    }

    
})














