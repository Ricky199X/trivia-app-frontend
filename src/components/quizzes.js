class Quizzes {
   constructor() {
      this.quizzes = []
      this.adapter = new TriviaAdapter()
      // this.bindEventListeners()
      this.fetchAndLoadQuizzes()
   }

   fetchAndLoadQuizzes() {
      this.adapter.getQuizzes().then(quizzes => {
         console.log(quizzes)
      })
   }
}