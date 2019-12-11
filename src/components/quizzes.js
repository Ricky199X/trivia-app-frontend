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
         .then(function(quizObjects) {
            // had to access the data itself, could not iterate over just the quiz objects alone
            const quizInfo = quizObjects.data
            return quizInfo
         })
         // now we can forEach over the quiz data and push them into this.quizzes up top
         .then(quizInfo => {
            // iterate over each element of the quiz info node list, pass a new instance of a quiz object into this.quizzes
            // console.log(quizInfo)
            this.quizzes = quizInfo.map(function(quizObj) {
               // this line returning error -> Quiz class is not defined currently
               // trying to instantiate new quiz objects and set them in this.quizzes
               return new Quiz(quizObj)
            })
            console.log(this.quizzes)
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
      // console.log(this.quizzes)
   }
}