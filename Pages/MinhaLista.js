const menu = document.querySelector('.menu');
const filme = document.querySelector('#Filme');

const filmes = ['IMG/FILME 1.webp', 'IMG/FILME 2.jpg', 'IMG/FILME 3.jpeg'];

let MenuState = false;
function openMenu() {
    if (MenuState == false) {
        AddToMenu();
    } else {
        RemoveToMenu();
    }
    MenuState = !MenuState;
}

function AddToMenu() {
    menu.classList.add('op_menu');
}

function RemoveToMenu() {
    menu.classList.remove('op_menu');
}

const lista = document.getElementById('lista');

const suggestions = [
    "Homem-Aranha: Sem volta para casa",
    "Velozes e Furiosos 10",
    "Five Nights at Freddy's: O pesadelo sem fim"
];
const imageSuggestions = [
    "IMG/FILME 2.jpg",
    "IMG/FILME 3.jpeg",
    "IMG/FILME 1.webp"
]
const linkSuggestions = [
    "pg002.html",
    "pg003.html",
    "pg001.html"
]

suggestions.sort();

for (i = 0; i < suggestions.length; i++) {
    const item = document.createElement('li');
    const LinkItem = document.createElement('a');
    const LinkImg = document.createElement('a');
    const ImageOfSuggestions = document.createElement('img');
    item.classList.add('w_search');
    LinkImg.href = linkSuggestions[i];
    ImageOfSuggestions.src = imageSuggestions[i];
    ImageOfSuggestions.classList.add('images_on_suggestions');
    LinkItem.textContent = suggestions[i];
    LinkItem.href = linkSuggestions[i];
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
