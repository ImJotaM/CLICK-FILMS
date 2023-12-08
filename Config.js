const menu = document.querySelector('.menu');
const main = document.querySelector('.main');
const filme = document.querySelector('#Filme');
const bg_img = document.querySelector('.bg_img');
const shadow = document.querySelector('.shadow');
const filme_1 = document.querySelector('.filme_1');
const filme_2 = document.querySelector('.filme_2');
const filme_3 = document.querySelector('.filme_3');
const painel = document.querySelector('.Painel');
const img1 = document.querySelector('#nome_1');
const img2 = document.querySelector('#nome_2');
const img3a = document.querySelector('#anome_3');
const img3b = document.querySelector('#bnome_3');

const filmes = ['IMG/FILME 1.webp', 'IMG/FILME 2.jpg', 'IMG/FILME 3.jpeg'];

let MenuState = false;
function openMenu() {
    if (MenuState == false) {
        AddToMenuAndMain();
        AddToGeneralPanel();
        AddToFilms();
        AddToName();
        AnimationToFilms();
    } else {
        RemoveToGeneralPanel();
        RemoveToMenuAndMain();
        RemoveToFilms();
        RemoveToName();
    }
    MenuState = !MenuState;
}

function AddToName() {
    img1.classList.add('op_nome1');
    img2.classList.add('op_nome2');
    img3a.classList.add('op_nome3');
    img3b.classList.add('op_nome3');
}
function RemoveToName() {
    img1.classList.remove('op_nome1');
    img2.classList.remove('op_nome2');
    img3a.classList.remove('op_nome3');
    img3b.classList.remove('op_nome3');
}

function AddToFilms() {
    filme_1.classList.add('op_filmes');
    filme_2.classList.add('op_filmes');
    filme_3.classList.add('op_filmes');
}

function AnimationToFilms() {
    setTimeout(() => { filme_1.classList.add('op_filmes2_1'); }, 500);
    setTimeout(() => { filme_2.classList.add('op_filmes2_2'); }, 1000);
    setTimeout(() => { filme_3.classList.add('op_filmes2_3'); }, 1500);
}

function RemoveToFilms() {
    filme_1.classList.remove('op_filmes');
    filme_2.classList.remove('op_filmes');
    filme_3.classList.remove('op_filmes');
    filme_1.classList.remove('op_filmes2_1');
    filme_2.classList.remove('op_filmes2_2');
    filme_3.classList.remove('op_filmes2_3');
}

function AddToMenuAndMain() {
    menu.classList.add('op_menu');
    main.classList.add('op_main');
}

function RemoveToMenuAndMain() {
    menu.classList.remove('op_menu');
    main.classList.remove('op_main');
}

function AddToGeneralPanel() {
    shadow.classList.add('op_shadow');
    painel.classList.add('op_painel');
}

function RemoveToGeneralPanel() {
    shadow.classList.remove('op_shadow');
    painel.classList.remove('op_painel');
}

let estilo = window.getComputedStyle(bg_img);
let opacidade = estilo.getPropertyValue('opacity');
let count = 1;
let id_interval;

function VerificarOpacidade() {
    estilo = window.getComputedStyle(bg_img);
    opacidade = estilo.getPropertyValue('opacity');
    if (opacidade == 0) {
        filme.setAttribute('src', filmes[count]);
        count++;
        if (count == filmes.length) {
            count = 0;
        }
        clearInterval(id_interval);
        setTimeout(() => {
            id_interval = setInterval(VerificarOpacidade, 1);
        }, 3000);
    }
}

id_interval = setInterval(VerificarOpacidade, 1);

const lista = document.getElementById('lista');

suggestions.sort();

for (i = 0; i < suggestions.length; i++) {
    const item = document.createElement('li');
    const LinkItem = document.createElement('a');
    const LinkImg = document.createElement('a');
    const ImageOfSuggestions = document.createElement('img');
    item.classList.add('w_search');
    LinkImg.href = linkSuggestions[i];
    LinkItem.href = linkSuggestions[i];
    ImageOfSuggestions.src = imageSuggestions[i];
    ImageOfSuggestions.classList.add('images_on_suggestions');
    LinkItem.textContent = suggestions[i];
    lista.appendChild(item);
    item.appendChild(LinkItem);
    item.appendChild(LinkImg);
    LinkImg.appendChild(ImageOfSuggestions);
}

function search() {
    let c = 3; 
    let input = document.getElementById('n_pesquisa').value;
    input = input.toLowerCase();
    let list_id = document.getElementById('words_id');
    let x = document.getElementsByClassName('w_search');
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
            c--;
            if (c == 0){
                list_id.style.display = "none";
            }
        } else {
            c++;
            list_id.style.display = "block";
            x[i].style.display = "list-item";
        }
    }
}
