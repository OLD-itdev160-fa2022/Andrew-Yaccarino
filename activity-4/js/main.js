// welcome message
let user = 'Andy';
let hello_msg = 'Hello, ';
let msg = hello_msg + user + '! Here are the lastes Processing reviews.';
let element = document.getElementById('greeting');

element.textContent = msg;

// product price
let price = 50;
let studentDiscount = .25;
let studentPrice = price - (price * studentDiscount);
let priceEl = document.getElementById('price');
let studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);