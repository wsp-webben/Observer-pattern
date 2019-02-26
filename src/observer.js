export default class Observer {
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