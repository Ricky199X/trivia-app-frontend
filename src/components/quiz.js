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
      return `<li>${this.questions}</li>`
      // console.log(this.questions)
   }
}