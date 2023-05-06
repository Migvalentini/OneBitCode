function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("The spaceship ".concat(spaceship.name, " commanded by ").concat(spaceship.captain, " was send in a mission"));
    return spaceship;
}
function accelerateSpaceship(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reducing the speed of the ship ".concat(spaceship.name, " to ").concat(targetSpeed, "..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Increasing the speed of the ship ".concat(spaceship.name, " to ").concat(targetSpeed, "..."));
    }
    else {
        alert("Maintaining the speed of the ship ".concat(spaceship.name, "..."));
    }
}
var spaceshipName = prompt('Enter the name of the spaceship to be sent:');
var spaceshipCaptain = prompt("Enter the ship's captain's name:");
var currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
var speed = Number(prompt("Enter the speed you want to accelerate:"));
accelerateSpaceship(speed, currentShip);
