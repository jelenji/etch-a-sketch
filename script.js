const container = document.querySelector('.container');


let square = 0;

function grid(){
    let row, content, squareNum = 0;

    for(let i = 0; i < 16; i++){
        row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('id', `row-${i}`);
        for(let j = 0; j < 16; j++){
            squareNum++;
            content = document.createElement('div');
            content.classList.add('square');
            content.setAttribute('id', `square-${squareNum}`);
            content.addEventListener('mouseover' ,(e) =>{
                console.log(content);
                e.target.style['background-color'] = '#000000';
            })
            row.appendChild(content);
        }
        container.append(row);
    }
}
grid();