var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const users = [];
function fetchUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://api.github.com/users/${username}`);
        const user = yield response.json();
        if (user.message) {
            alert('User not found');
        }
        else {
            users.push(user);
            /* alert(`
         User Registered!
               Login: ${user.login}
               Id: ${user.id}
               Name: ${user.name}
               Bio: ${user.bio}
               Public Repositories: ${user.public_repos}
               Repository URL: ${user.repos_url}`) */
        }
    });
}
function showUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield users.find(user => user.login === username);
        if (typeof user === 'undefined') {
            alert('User not found');
        }
        else {
            const response = yield fetch(user.repos_url);
            const repositories = yield response.json();
            let list = `
   ${username} Information:
      Login: ${user.login}
      Name: ${user.name}
      Id: ${user.id}
      Bio: ${user.bio}
      Public Repositories: ${user.public_repos}\n
      Repositories:`;
            repositories.forEach(repo => {
                list += `
         Name: ${repo.name}
         Description: ${repo.description}
         Fork: ${repo.fork}
         Stars: ${repo.stargazers_count}
         `;
            });
            alert(list);
        }
    });
}
function showUsersInformation() {
    let list = 'Saved Users:\n';
    users.forEach(user => {
        list += `
      Login: ${user.login}
      Name: ${user.name}\n`;
    });
    alert(list);
}
function calculateSumRepo() {
    const sum = users.reduce((accumulator, user) => (accumulator + user.public_repos), 0);
    alert(`Sum of Public Repositories: ${sum}`);
}
function top3() {
    const top3 = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 3);
    let message = 'Top 5 Users with Most Public Repositories:\m';
    top3.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`;
    });
    alert(message);
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetchUser('Migvalentini');
        yield fetchUser('maateusilva');
        yield fetchUser('lucasmontano');
        yield fetchUser('filipedeschamps');
        yield fetchUser('rafaballerini');
        yield fetchUser('professorguanabara');
        showUsersInformation();
        showUser('rafaballerini');
        showUser('maateusilva');
        calculateSumRepo();
        top3();
    });
}
main();
