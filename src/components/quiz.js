class Quiz {
   constructor(quizJSON) {
      this.id = quizJSON.id
      this.title = quizJSON.attributes.title
      this.description = quizJSON.attributes.description
   }

   renderLi() {
      return `<li>${this.title}</li>`
   }
}