// Titanic

var Ship = function (element) {
    this.element = element;
    this.passengers = [];
};

Ship.prototype.addPassenger = function (passenger) {
    var deferred = Q.defer();
    
    passenger.element.addEventListener('transitionend', function () { deferred.resolve(); });
    passenger.element.style.opacity = '1';
    this.passengers.push(passenger);
    
    return deferred.promise;
};

Ship.prototype.sail = function () {
    var deferred = Q.defer();
    
    this.element.addEventListener('transitionend', function () { deferred.resolve(); });
    this.element.classList.add('sail');
    this.passengers.forEach(function (passenger) {
        passenger.element.classList.add('sail');
    });
    
    return deferred.promise;
};

Ship.prototype.tilt = function () {
    var deferred = Q.defer();
    
    this.element.addEventListener('transitionend', function () { deferred.resolve(); });
    this.element.classList.add('tilt');
    this.passengers.forEach(function (passenger) {
        passenger.element.classList.add('float');
    });
    
    return deferred.promise;
};

Ship.prototype.drown = function () {
    var deferred = Q.defer();
    
    this.element.addEventListener('transitionend', function () { deferred.resolve(); });
    this.element.classList.add('drown');
    
    return deferred.promise;
};

// Passenger

var Passenger = function (element) {
    this.element = element;
};

Passenger.prototype.float = function () {
    var deferred = Q.defer();
    
    this.element.addEventListener('transitionend', function () { deferred.resolve(); });
    this.element.classList.add('float');
    
    return deferred.promise;
};

Passenger.prototype.drown = function () {
    var deferred = Q.defer();
    
    this.element.addEventListener('transitionend', function () { deferred.resolve(); });
    this.element.classList.add('drown');
    
    return deferred.promise;
};
