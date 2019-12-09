class Quizzes {
   constructor() {
      this.quizzes = []
      this.adapter = new TriviaAdapter()
      // this.bindEventListeners()
      this.fetchAndLoadQuizzes()
   }

   fetchAndLoadQuizzes() {
      this.adapter
         .getQuizzes()
         .then(quizObjects => {
            console.log(typeof quizObjects)
            // quizObject is returning undefined - can't use forEach 
            // quizObjects.forEach(quizObject => this.quizzes.push(quizObject))

            for(const quizObject in quizObjects) {
               console.log(quizObject)  // this is console logging 'data' for some reason
               this.quizzes.push(quizObject)
         }
      })
      .then(() => {
         this.render()
      })
   }

   // render quizzes to the DOM - call after we get all the quizzes

   render() {
      // needs to append to main
      const main = document.querySelector('main')
      // create the trivia container - div
      const quizMenu = document.createElement('div')
      quizMenu.id = 'quiz-container'
      // example out to see if working
      quizMenu.innerText = "testing the div"

      // append the quizMenu to the main
      main.appendChild(quizMenu)
      console.log('my notes are', this.notes)
   }
}