var titanic = new Ship(document.querySelector('.titanic'));
var jack = new Passenger(document.querySelector('.jack'));
var rose = new Passenger(document.querySelector('.rose'));


function story() {
    Q.all([titanic.addPassenger(jack), titanic.addPassenger(rose)])
        .then(titanic.sail.bind(titanic))
        .then(titanic.tilt.bind(titanic))
        .then(titanic.drown.bind(titanic))
        .then(jack.drown.bind(jack))
        .catch(function (error) { console.error(error); });
}
