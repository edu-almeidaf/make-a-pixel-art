const container = document.querySelector('.container');
const sizeElement = document.querySelector('.size');
let size = sizeElement.value;
const color = document.querySelector('.color');
const resetBtn = document.querySelector('.btn');

let draw = false;

const populate = (size) => {
    container.style.setProperty('--size', size)
    for(let index = 0; index < size * size; index += 1) {
        const div = document.createElement('div');
        div.classList = ('pixel');

        div.addEventListener('mouseover', () => {
            if(!draw) return
            div.style.backgroundColor = color.value;
        })

        div.addEventListener('mousedown', () => {
            div.style.backgroundColor = color.value;
        })


        container.appendChild(div);
    }
}

window.addEventListener('mousedown', () => {
    draw = true;
});

window.addEventListener('mouseup', () => {
    draw = false;
});

const reset = () => {
    container.innerHTML = '';
    populate(size);
}

resetBtn.addEventListener('click', reset)

sizeElement.addEventListener('keyup', () => {
  size = sizeElement.value;
  reset()
})

populate(size)