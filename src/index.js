import Observer from './observer.js';

const observer = new Observer();

const observerBlock = document.querySelector('.observer');
const updateButton = observerBlock.querySelector('.js-update');
const addButton = observerBlock.querySelector('.js-add');

function addSubscriber() {
  const template = document.querySelector('#subscriber');
  const subscribers = observerBlock.querySelector('.js-subscribers');
  const clone = template.content.cloneNode(true);
  clone.querySelector('.js-remove').addEventListener('click', removeSubscriber);
  subscribers.appendChild(clone);

}

function removeSubscriber() {
  const subscriberBlock = this.closest('.js-sub');
  this.removeEventListener('click', removeSubscriber);
  subscriberBlock.parentNode.removeChild(subscriberBlock);
}

updateButton.addEventListener('click', function() {
  observer.notify(this.value);
});

addButton.addEventListener('click', addSubscriber);