/*
CREATING INTERFACES:

=> Another way to create types in Typescript
=> Mostly used with objects
*/
var sun;
sun.name = "Sun";
sun.mass = 1.989e30;
sun.age = 4.603e9;
sun.planets = [];
/*
Is the same as, but harder to see:
let asteroid: Asteroid
asteroid.name = 'Asteroid'*/
var MilkWayPlanet = /** @class */ (function () {
    function MilkWayPlanet(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    MilkWayPlanet.prototype.createSatellite = function (name) {
        // ...
    };
    return MilkWayPlanet;
}());
