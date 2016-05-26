var titanic = new Ship(document.querySelector('.titanic'));
var jack = new Passenger(document.querySelector('.jack'));
var rose = new Passenger(document.querySelector('.rose'));


function story() {
    Q.all([titanic.addPassenger(jack), titanic.addPassenger(rose)])
        .then(function () { return titanic.sail(); })
        .then(function () { return titanic.tilt(); })
        .then(function () { return titanic.drown(); })
        .then(function () { return jack.drown(); })
        .catch(function (error) { console.error(error); });
}
