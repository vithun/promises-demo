// Titanic

var Ship = function (element) {
    this.element = element;
    this.passengers = [];
};

Ship.prototype.addPassenger = function (passenger, callback) {
    passenger.element.addEventListener('transitionend', callback);
    passenger.element.style.opacity = '1';
    this.passengers.push(passenger);
};

Ship.prototype.sail = function (callback) {
    this.element.addEventListener('transitionend', callback);
    this.element.classList.add('sail');
    this.passengers.forEach(function (passenger) {
        passenger.element.classList.add('sail');
    });
};

Ship.prototype.tilt = function (callback) {
    this.element.addEventListener('transitionend', callback);
    this.element.classList.add('tilt');
    this.passengers.forEach(function (passenger) {
        passenger.element.classList.add('float');
    });
};

Ship.prototype.drown = function (callback) {
    this.element.addEventListener('transitionend', callback);
    this.element.classList.add('drown');
};

// Passenger

var Passenger = function (element) {
    this.element = element;
};

Passenger.prototype.float = function () {
    this.element.classList.add('float');
};

Passenger.prototype.drown = function () {
    this.element.classList.add('drown');
};
