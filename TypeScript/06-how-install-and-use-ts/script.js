var setPilot = function (newPilot, spaceship) {
    spaceship.pilot = newPilot;
};
var accelerate2 = function (targetSpeed, spaceship) {
    spaceship.speed = targetSpeed;
};
var sendToMission = function (spaceship) {
    spaceship.inMission = true;
};
var spaceship = {
    name: '',
    pilot: '',
    speed: 0,
    inMission: false,
};
var pilot = "Han Solo";
spaceship.name = "Millennium Falcon";
setPilot(pilot, spaceship);
accelerate2(50, spaceship);
sendToMission(spaceship);
console.log(spaceship);
