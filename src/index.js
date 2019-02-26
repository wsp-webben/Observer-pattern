import Observer from './observer.js';

const observer = new Observer();

const observerBlock = document.querySelector('.observer');
const input = observerBlock.querySelector('.observer__input');
const resultPlus = observerBlock.querySelector('.observer__result--plus');
const resultMultiply = observerBlock.querySelector('.observer__result--multiply');
const resultMod = observerBlock.querySelector('.observer__result--mod');

observer.subscribe(data => resultPlus.textContent = +data + 404);
observer.subscribe(data => resultMultiply.textContent = data * 2);
observer.subscribe(data => resultMod.textContent = data % 42);

input.addEventListener('input', function() {
    observer.notify(this.value);
});