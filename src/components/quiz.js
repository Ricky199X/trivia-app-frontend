class Quiz {
   constructor(quizJSON) {
      this.id = quizJSON.id
      this.title = quizJSON.attributes.title
      this.description = quizJSON.attributes.description
      this.questions = quizJSON.attributes.questions
   }

   renderLi() {
      return `<li>${this.title}</li>`
   }

   // function to renders a quiz's questions
   renderQuestions() {
      for(let i = 0; i < this.questions.length; i++) {
         return `<li> ${i + 1}. ${this.questions[i].prompt}</li>`
      }
   }
}