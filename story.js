var titanic = new Ship(document.querySelector('.titanic'));
var jack = new Passenger(document.querySelector('.jack'));
var rose = new Passenger(document.querySelector('.rose'));


function story() {
    titanic.addPassenger(jack, function () {
        titanic.addPassenger(rose, function () {
            titanic.sail(function () {
                titanic.tilt(function () {
                    titanic.drown();
                    jack.drown();
                });
            });
        });
    });
}
