// Titanic

var Ship = function (element) {
    this.element = element;
    this.passengers = [];
};

Ship.prototype.addPassenger = function (passenger) {
    passenger.element.style.display = 'block';
    this.passengers.push(passenger);
};

Ship.prototype.sail = function () {
    this.element.classList.add('sail');
    this.passengers.forEach(function (passenger) {
        passenger.element.classList.add('sail');
    });
};

Ship.prototype.tilt = function () {
    this.element.classList.add('tilt');
    this.passengers.forEach(function (passenger) {
        passenger.element.classList.add('float');
    });
};

Ship.prototype.drown = function () {
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
