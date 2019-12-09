class Quizzes {
   constructor() {
      this.quizzes = []
      this.adapter = new TriviaAdapter()
      // this.bindEventListeners()
      this.fetchAndLoadQuizzes()
   }

   fetchAndLoadQuizzes() {
      this.adapter.getQuizzes().then(quizzes => {
         return quizzes
      })
      .then(() => {
         this.render()
      })
   }

   // render quizzes to the DOM - call after we get all the quizzes

   render() {
      console.log('rendering!')
      // needs to append to main
      const main = document.querySelector('main')
      // create the trivia container - div
      const quizMenu = document.createElement('div')
      quizMenu.id = 'quiz-container'
      // example out to see if working
      quizMenu.innerText = "testing the div"

      // append the quizMenu to the main
      main.appendChild(quizMenu)
   }
}