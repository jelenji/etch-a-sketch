const container = document.querySelector('.grid-container');
const reset = document.querySelector('.reset');
const black = document.querySelector('.black');
const color = document.querySelector('.random-color');
const erase = document.querySelector('.erase');
const gridUp = document.querySelector('.grid-up');
const gridDown = document.querySelector('.grid-down');
const btnContainer = document.querySelector('.button-container');
const allBtns = btnContainer.querySelectorAll('button');


let gridSize = 20 , colorToggle = 0, blackToggle = 1, eraseToggle = 0;

function grid(){
    let row, content, squareNum = 0, color;

    for(let i = 0; i < gridSize; i++){
        row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('id', `row-${i}`);
        for(let j = 0; j < gridSize; j++){
            squareNum++;
            content = document.createElement('div');
            content.classList.add('square');
            content.setAttribute('id', `square-${squareNum}`);
            content.addEventListener('mouseover' ,(e) =>{
                color = colorDecider();
                console.log(color);
                e.target.style['background-color'] = `${color}`;
            })
            row.appendChild(content);
        }
        container.append(row);
    }
}

function eraseGrid(){
    let squares = container.querySelectorAll('.square');
    let rows = container.querySelectorAll('.row');

    squares.forEach(square => {
        square.remove();
    })

    rows.forEach(row => {
        row.remove();
    })
    return;
}

gridUp.addEventListener('click', ()=>{
    
    if(gridSize < 100){
        eraseGrid();
        gridSize++;
        grid();
    }       
})

gridDown.addEventListener('click', ()=>{
    
    if(gridSize > 1){
        eraseGrid();
        gridSize--;
        grid();
    }       
})

reset.addEventListener('click', ()=>{
    let squares = container.querySelectorAll('.square');
    squares.forEach(square => {
        square.style['background-color'] = '#ffffff';
    })
        
})

black.addEventListener('click', ()=>{
    colorToggle = 0;
    blackToggle = 1;
    eraseToggle = 0;
})
color.addEventListener('click', ()=>{
    colorToggle = 1;
    blackToggle = 0;
    eraseToggle = 0;
})
erase.addEventListener('click', ()=>{
    colorToggle = 0;
    blackToggle = 0;
    eraseToggle = 1;
})

allBtns.forEach(button =>{
    button.addEventListener('mouseover', (e)=>{
        e.target.style['background-color'] = '#39ff14';
        e.target.style['color'] = '#000000';


    })
    button.addEventListener('mouseout', (e)=>{
        e.target.style['background-color'] = '#000000';
        e.target.style['color'] = '#39ff14';


    })
})
function colorDecider(){
    if(blackToggle){
        return '#000000';
    }
    else if(eraseToggle){
        return '#ffffff';
    }
    else{
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
}




grid();