let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateGrocery() {
    let grocery1 = parseFloat(document.getElementById('grocery1').value)
    let grocery2 = parseFloat(document.getElementById('grocery2').value)
    let grocery3 = parseFloat(document.getElementById('grocery3').value)

    let total = grocery1 + grocery2 + grocery3
    document.getElementById('grocery-result').innerText = `The total amount is: $${total}`
}

/**
 * Practice Task: Grocery Tracker
 */



