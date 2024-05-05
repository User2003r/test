let submit = document.querySelector('.submit');
let input = document.querySelector('.notes');
let box = document.querySelector('.box');


submit.addEventListener('click', () => {
    if (input.value == "")
        alert('Write Something');
    else {
        console.log(input.value);

    }
    input.value = "";

});

const createDiv = () => {
    let div = document.createElement('div');
    div.classList.add('item');
    return div;
}

const createImg = () => {
    let img = document.createElement('img');
    img.setAttribute('src', './check-list.png');
    return img;
}

const createSpan = () => {
    let span = document.createElement('span');
    return span;
}

const data = () => {
    box.append(createDiv());
    createDiv().appendChild(createImg());
    createDiv().appendChild(createSpan());
}






