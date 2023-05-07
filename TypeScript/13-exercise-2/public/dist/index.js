var planets = [];
function addPlanet(name, coords, situation) {
}
function firstMenu() {
}
function secondMenu() {
}
function thirdMenu() {
}
function fourthMenu() {
}
function fifthMenu() {
}
var option = 0;
while (option !== 6) {
    var menu = "Enter a option:\n   1 - Add Planet\n   2 - Update Status of a Planet\n   3 - Add Satellite to a Planet\n   4 - Remove Satellite from a Planet\n   5 - List Saved Planets\n   6 - Exit";
    var option_1 = Number(prompt(menu));
    switch (option_1) {
        case 1:
            firstMenu();
            break;
        case 2:
            secondMenu();
            break;
        case 3:
            thirdMenu();
            break;
        case 4:
            fourthMenu();
            break;
        case 5:
            fifthMenu();
            break;
        default:
            alert('Invalid Option, Enter a Correct!');
            break;
    }
}
