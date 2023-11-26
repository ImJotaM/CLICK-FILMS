const menu = document.querySelector('.menu');
const main = document.querySelector('.main');
const filme = document.querySelector('#Filme');
const bg_img = document.querySelector('.bg_img');
const shadow = document.querySelector('.shadow');
const filme_1 = document.querySelector('.filme_1');
const filme_2 = document.querySelector('.filme_2');
const filme_3 = document.querySelector('.filme_3');
const nome_filme = document.querySelector('.nome_filme h1');
let MenuState = false;

const filmes = ['IMG/FILME 1.webp' ,'IMG/FILME 2.jpg', 'IMG/FILME 3.jpeg'];

function openMenu(){
    if (MenuState == false){
        menu.classList.add('op_menu');
        main.classList.add('op_main');
        shadow.classList.add('op_shadow');
        filme_1.classList.add('op_filmes');
        filme_2.classList.add('op_filmes');
        filme_3.classList.add('op_filmes');
        setTimeout (()=>{
            filme_1.classList.add('op_filmes2_1');
        }
        , 500);
        setTimeout (()=>{
            filme_2.classList.add('op_filmes2_2');
        }
        , 1000);
        setTimeout (()=>{
            filme_3.classList.add('op_filmes2_3');
        }
        , 1500);
    }else{
        menu.classList.remove('op_menu');
        main.classList.remove('op_main');
        shadow.classList.remove('op_shadow');
        filme_1.classList.remove('op_filmes');
        filme_2.classList.remove('op_filmes');
        filme_3.classList.remove('op_filmes');
        filme_1.classList.remove('op_filmes2_1');
        filme_2.classList.remove('op_filmes2_2');
        filme_3.classList.remove('op_filmes2_3');
    }
    MenuState = !MenuState;
}
let estilo = window.getComputedStyle(bg_img);
let opacidade = estilo.getPropertyValue('opacity');
let count = 1;
let id_interval;

function VerificarOpacidade(){
    estilo = window.getComputedStyle(bg_img);
    opacidade = estilo.getPropertyValue('opacity');
    if (opacidade == 0){
        filme.setAttribute('src', filmes[count]);
        count++;
        if (count == filmes.length){
            count = 0;
        }
        clearInterval(id_interval);
        setTimeout(()=>{
            id_interval = setInterval(VerificarOpacidade, 1);
        }, 3000);
    }
}
   
id_interval = setInterval(VerificarOpacidade, 1);