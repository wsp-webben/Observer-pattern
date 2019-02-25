export class Observer {
    constructor() {
        this.observers = [];
    }

    subscribe(subscriber) {
        this.observers.push(subscriber);
    }

    unsubscribe(subscriber) {
        this.observers = this.observers.filter(observer => observer != subscriber);
    }

    notify(data) {
        this.observers.forEach(subscriber => subscriber(data));
    }
}

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