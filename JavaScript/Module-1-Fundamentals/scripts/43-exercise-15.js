const jobs = []
let option = ""
let index = 0

function menu() {
   let option = prompt(
      "WELCOME TO JOBS MENU!\n" +
      "Enter an option:\n" +
      "1) List Available Vacancies Jobs\n" +
      "2) Create a New Vacancy Job\n" +
      "3) View a Vacancy Job\n" +
      "4) Add a Candidate to a Vacancy Job\n" +
      "5) Delete a Vacancy Job\n" +
      "6) Exit" 
   )
   return option
}

function list_jobs() {
   if (jobs.length === 0) {
      alert("The jobs list is empty, please register someone!")
   } else {
      const jobs_in_text = jobs.reduce(function (final_text, job, index) {
         final_text += index + ". "
         final_text += job.name
         final_text += " (" + job.candidates.length + " candidates)\n"
         return final_text
      }, "")

      alert(jobs_in_text)
   }
}

function create_job() {
   let name = prompt("Enter the job name:")
   let description = prompt("Enter the job description:")
   let deadline = prompt("Enter the deadline:")
   let candidates = []
   let confirmation = confirm(
      "Are you sure you want create this job?\n" +
      "Name: " + name + "\n" +
      "Description: " + description + "\n" +
      "Deadline: " + deadline
   )

   if (confirmation) {
      jobs.push({name, description, deadline, candidates, index})
      index ++
   }
}

function view_job() {
   const index = prompt("Enter the job index you want view:")
   const job = jobs[index]

   if (index >= jobs.length || index < 0) {
      alert("[ERROR] Invalid Index!")
      return
   }

   const candidates_in_text = job.candidates.reduce(function (final_text, candidate) {
      return final_text + "\n - " + candidate
   }, "") 

   alert(
      "Job Number: " + job.index + "\n" +
      "Job Name: " + job.name + "\n" +
      "Job Description: " + job.description + "\n" +
      "Job Deadline: " + job.deadline + "\n" +
      "Job Number of Candidates: " + job.candidates.length + "\n" +
      "Job Candidates Names: " + candidates_in_text
   )
}

function candidate_application() {
   const name = prompt("Enter the candidate name:")
   const index = prompt("Enter the index job:")
   const confirmation = confirm(
      "Do you want enroll " + name + " in the index job vacancy " + index + "?"
   )
   const job = jobs[index]

   if (confirmation) {
      job.candidates.push(name)
   }
}

function delete_job() {
   const index = prompt("Enter the index job:")
   const job = jobs[index]
   const confirmation = confirm(
      "Do you really want to delete the job vacancy " + index + "?\n" +
      "Job Number: " + job.index + "\n" +
      "Job Name: " + job.name + "\n" +
      "Job Description: " + job.description + "\n" +
      "Job Deadline: " + job.deadline + "\n" +
      "Job Number of Candidates: " + job.candidates.length
   )

   if (confirmation) {
      jobs.splice(index, 1)
      alert("Your job vacancy was successful removed!")
   }
}

function execute() {
   while (option !== "6" || option == null) {
      option = menu()
      switch (option) {
         case "1":
            list_jobs()
            break
         case "2":
            create_job()
            break
         case "3":
            view_job()
            break
         case "4":
            candidate_application()
            break
         case "5":
            delete_job()
            break
         case "6":
            alert("Exiting...")
            break
         default:
            alert("[ERROR] Invalid Answer!")
      }
   }
}

execute()