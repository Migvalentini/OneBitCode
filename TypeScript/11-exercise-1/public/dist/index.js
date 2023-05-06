const spaceshipList = [];
function firstMenu() {
    const spaceshipName = prompt('Enter the spaceship name:');
    const pilot = prompt("Enter the pilot's name:");
    const crewLimit = Number(prompt('Enter the crew limit:'));
    const confirmation = confirm(`Do you really want to save the ship ${spaceshipName} with ${pilot} as pilot and ${crewLimit} as crew limit?`);
    if (confirmation) {
        addSpaceship(spaceshipName, pilot, crewLimit);
        console.log(spaceshipList);
    }
}
function secondMenu() {
    const member = prompt("Enter the member's name:");
    const spaceshipName = prompt(`The member ${member} will be sent to which spaceship?`);
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Do you really want to add the member ${member} to ${spaceshipName}?`);
        if (confirmation) {
            addMemberToCrew(member, spaceship);
        }
    }
    else {
        alert("Spaceship name not found");
    }
}
function thirdMenu() {
    const spaceshipName = prompt("Enter the spaceship name:");
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma e envio da ${spaceship.name} na missão?`);
        if (confirmation) {
            sendInMission(spaceship);
        }
    }
}
function fourthMenu() {
    let list = 'Registered Spaceships:\n';
    spaceshipList.forEach((spaceship) => {
        list += `
      Spaceship: ${spaceship.name}
      Pilot: ${spaceship.pilot}
      In Mission? ${spaceship.inMission ? 'Yes' : 'No'}
      Max Length of Crew: ${spaceship.crewLimit}
      Crew: ${spaceship.crew.length}
    `;
        spaceship.crew.forEach(member => {
            list += `    - ${member}\n`;
        });
    });
    if (spaceshipList.length === 0)
        alert('Spaceships List is empty');
    else
        alert(list);
}
function addSpaceship(spaceshipName, pilot, crewLimit, crew, inMission) {
    const spaceship = {
        spaceshipName,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceshipList.push(spaceship);
    alert(`The spaceship ${spaceship.spaceshipName} was registered!\nData:
      \tName: ${spaceship.spaceshipName}
      \tPilot: ${spaceship.pilot}
      \tCrew Limit: ${spaceship.crewLimit}
      \tCrew: ${spaceship.crew.join(", ")}
      \tIn Mission: ${spaceship.inMission}`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceshipList.find(ship => {
        return ship.spaceshipName === name;
    });
    return spaceship;
}
function addMemberToCrew(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`The crew is full! ${member} can't be added to ${spaceship.name}`);
    }
    else {
        spaceship.crew.push(member);
        alert(`The member ${member} was added to ${spaceship.name}`);
    }
}
function sendInMission(spaceship) {
    if (spaceship.inMission) {
        alert(`${spaceship.name} can't be sent to a mission because it has already been sent`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`The crew of ${spaceship.name} is not strong enough to carry out the mission`);
    }
    else {
        spaceship.inMission = true;
        alert(`${spaceship.name} sent to a mission!`);
    }
}
let option = 0;
while (option !== 5) {
    const menu = 'Choice a option:\n' +
        '1 - Add Spaceship\n' +
        '2 - Add Member to a Spaceship\n' +
        '3 - Send Spaceship to Mission\n' +
        '4 - Show Spaceship List\n' +
        '5 - Exit';
    option = Number.parseInt(prompt(menu));
    switch (option) {
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
            alert('Exiting...');
            break;
        default:
            alert('Invalid Option!');
    }
}
