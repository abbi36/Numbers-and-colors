const message = document.getElementById('message');
const colors = [
    '#EB5E28',
    '#F9A03F',
    '#F3C053',
    '#A1C349',
    '#87A330',
    '#6A8532',
];

let i = 5;

function changeColor() {
    const color = colors[i];
    message.style.color = color;
    i -= 1;
    if (i == 0) {
        i = 5;
    }
}

message.addEventListener('click', changeColor);