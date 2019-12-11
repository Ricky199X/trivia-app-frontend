class TriviaAdapter {
   constructor() {
      this.baseUrl = "http://localhost:3000/quizzes"
   }

   getQuizzes() {
      return fetch(this.baseUrl).then(response => {
         // console.log(response);
         return response.json();
       }).then(data => {
         // Work with JSON data here
         return data
       }).catch(err => {
         // Do something for an error here
        alert(err);
       })
   }
}

