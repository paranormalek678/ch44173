/*
const int = () => {
const c = document.getElementById ('container');
[...c.children].forEach(el => console.log(el));

}
window.addEventListener('DOMContentLoaded', int);      // bez tej komendy nie da sie stworzyc strony

*/

const fields = [
    {txt: '1', col: '1', row: '4' },
    {txt: '2', col: '2', row: '4' },
    {txt: '3', col: '3', row: '4' },
    {txt: '4', col: '1', row: '3' },
    {txt: '5', col: '2', row: '3' },
    {txt: '6', col: '3', row: '3' },
    {txt: '7', col: '1', row: '2' },
    {txt: '8', col: '2', row: '2' },
    {txt: '9', col: '3', row: '2' },
    {txt: '0', col: '1/3', row: '5' },
    {txt: 'C', col: '4', row: '2' },
    {txt: '+', col: '4', row: '3' },
    {txt: '-', col: '4', row: '4' },
    {txt: '.', col: '3', row: '5' },
    {txt: '=', col: '4', row: '5' },
    {txt: 'Display', col: '1/5', row: '1' }
    //'7','8','9','4','5','6','1','2','3','0','.','C','+','-','='];

];
let buffer = 0;          // buffor zmienna
let op = 0;             // operation zmienna
let clearFlag = false;

const handleCilck = ev =>{
    const d = document.getElementById('Display');
    const keyCode = ev.target.textContent;
    switch (keyCode){


        case 'C':
        d.textContent = '0';
        buffer =0;

        break;
        case '=':
        if (op===0){
            buffer = parseFloat(d.textContent);
            }else{
                buffer += op* parseFloat(d.textContent);
            }
            d.textContent = buffer;
            op = 0;
        break;

        case'+':
        case '-':
        if (op===0){
        buffer += parseFloat(d.textContent);
        }else{
            buffer+= op* parseFloat(d.textContent);
        }
        //d.textContent = '0';
        op = keyCode === '+' ? 1: -1;
        clearFlag = true;
        break;

        default:
        if (keyCode === '0' && d.textContent === '0')return;
        if (keyCode === '.' && d.textContent.includes('.'))return;
        if (d.textContent ==='0' || clearFlag){
            d.textContent = keyCode;
            clearFlag =false;
        }else{

        d.textContent+=keyCode;
        }
        break;



    }
};
const int =()=>{
    const container = document.getElementById('container');
    fields.forEach(el=> {
        console.log(el);
        let div = document.createElement('div');
        div.textContent = el.txt;
        div.style.gridColumn=el.col;
        div.style.gridRow=el.row;
        if (el.txt==='Display'){
            div.id='Display';
            div.textContent = '0';
        }else{
            div.addEventListener('click',handleCilck);
        }
        container.appendChild(div);
    });

}
window.addEventListener('DOMContentLoaded', int);      // bez tej komendy nie da sie stworzyc strony