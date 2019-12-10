class TriviaAdapter {
   constructor() {
      this.baseUrl = "http://localhost:3000/quizzes"
   }

   getQuizzes() {
      return fetch("http://localhost:3000/quizzes").then(response => {
         // console.log(response);
         return response.json();
       }).then(data => {
         // Work with JSON data here
         return data
       }).catch(err => {
         // Do something for an error here
         console.log("Error Reading data " + err);
       })
   }
}

