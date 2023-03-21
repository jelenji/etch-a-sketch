const container = document.querySelector('.grid-container');
const reset = document.querySelector('.reset');
const black = document.querySelector('.black');
const color = document.querySelector('.random-color');



let gridSize = 30 , colorToggle = 0, blackToggle = 1;

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

reset.addEventListener('click', ()=>{
    let squares = container.querySelectorAll('.square');
    squares.forEach(square => {
        square.style['background-color'] = '#ffffff';
    })
        
})

black.addEventListener('click', ()=>{
    colorToggle = 0;
    blackToggle = 1;
})
color.addEventListener('click', ()=>{
    colorToggle = 1;
    blackToggle = 0;
})
function colorDecider(){
    if(blackToggle){
        return '#000000';
    }
    else{
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
}




grid();