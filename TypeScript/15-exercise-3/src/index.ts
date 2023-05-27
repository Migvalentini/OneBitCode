interface GitHubUserResponse {
   id: number,
   login: string,
   name: string,
   bio: string,
   public_repos: number,
   repos_url: string,
   message?: string
}

interface GitHubRepoResponse {
   name: string,
   description: string,
   fork: boolean,
   stargazers_count: number
}

const users: GitHubUserResponse[] = []

async function fetchUser(username: string) {
   const response = await fetch(`https://api.github.com/users/${username}`)
   const user: GitHubUserResponse = await response.json()

   if (user.message) {
      alert('User not found')
   } else {
      users.push(user)

      /* alert(`
   User Registered!
         Login: ${user.login}
         Id: ${user.id}
         Name: ${user.name}
         Bio: ${user.bio}
         Public Repositories: ${user.public_repos}
         Repository URL: ${user.repos_url}`) */
   }
}

async function showUser(username: string) {
   const user = await users.find(user => user.login === username)

   if(typeof user === 'undefined') {
      alert('User not found')
   } else {
      const response = await fetch(user.repos_url)
      const repositories: GitHubRepoResponse[] = await response.json()

      let list = `
   ${username} Information:
      Login: ${user.login}
      Name: ${user.name}
      Id: ${user.id}
      Bio: ${user.bio}
      Public Repositories: ${user.public_repos}\n
      Repositories:`

      repositories.forEach(repo => {
         list += `
         Name: ${repo.name}
         Description: ${repo.description}
         Fork: ${repo.fork}
         Stars: ${repo.stargazers_count}
         `
      })

      alert(list)
   }
}

function showUsersInformation() {
   let list = 'Saved Users:\n'

   users.forEach(user => {
      list += `
      Login: ${user.login}
      Name: ${user.name}\n`
   })
   alert(list)
}

function calculateSumRepo() {
   const sum = users.reduce((accumulator, user) => (accumulator + user.public_repos), 0)

   alert(`Sum of Public Repositories: ${sum}`)
}

function top3() {
   const top3 = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0,3)

   let message = 'Top 5 Users with Most Public Repositories:\m'

   top3.forEach((user, index) => {
      message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`
    })

   alert(message)
}

async function main() {
   await fetchUser('Migvalentini')
   await fetchUser('maateusilva')
   await fetchUser('lucasmontano')
   await fetchUser('filipedeschamps')
   await fetchUser('rafaballerini')
   await fetchUser('professorguanabara')

   showUsersInformation()
   showUser('rafaballerini')
   showUser('maateusilva')
   calculateSumRepo()
   top3()
}

main()