import Observer from './observer.js';

const observer = new Observer();

const observerBlock = document.querySelector('.observer');
const updateInput = observerBlock.querySelector('.js-update-data');
const updateButton = observerBlock.querySelector('.js-update');
const addButton = observerBlock.querySelector('.js-add');

function addSubscriber() {
  const template = document.querySelector('#subscriber');
  const subscribers = observerBlock.querySelector('.js-subscribers');
  const clone = template.content.cloneNode(true);
  
  const removeButton = clone.querySelector('.js-remove')
  removeButton.addEventListener('click', removeSubscriber);
  const dataField = clone.querySelector('.js-data');
  observer.subscribe(data => dataField.textContent = data);
  
  subscribers.appendChild(clone);
}

function removeSubscriber() {
  const subscriberBlock = this.closest('.js-sub');
  this.removeEventListener('click', removeSubscriber);
  subscriberBlock.parentNode.removeChild(subscriberBlock);
}

updateButton.addEventListener('click', function() {
  observer.notify(updateInput.value);
});

addButton.addEventListener('click', addSubscriber);