class Quizzes {
   constructor() {
      this.quizzes = []
      this.adapter = new TriviaAdapter()
      this.initBindingAndEventListeners()
      this.fetchAndLoadQuizzes()
   }

   initBindingAndEventListeners() {
      this.main = document.querySelector('main')
      this.quizMenu = document.getElementById('quiz-container')
   }

   fetchAndLoadQuizzes() {
      this.adapter
      .getQuizzes()
         .then(function(quizObjects) {
            // had to access the data itself, could not iterate over just the quiz objects alone
            const quizInfo = quizObjects.data
            return quizInfo
         })
         // now we can forEach over the quiz data and push them into this.quizzes
         .then(quizInfo => {
            // iterate over each element of the quiz info node list, pass a new instance of a quiz object into this.quizzes
            console.log(quizInfo)
            this.quizzes = quizInfo.map(function(quizObj) {
               // this line returning error -> Quiz class is not defined currently
               // trying to instantiate new quiz objects and set them in this.quizzes
               // MIGHT NEED TO BIND .this HERE, CHECK WITH MICAH
               // DO I NEED TO USER ARROW FUNCTION HERE?
               return new Quiz(quizObj)
            })
         })
      .then(() => {
         this.render()
      })
   }

   // render quizzes to the DOM - call after we get all the quizzes
   render() {
      // create the trivia container - div
      const quizMenu = document.createElement('ul')
      quizMenu.id = 'quiz-container'

      // we'll want to append html to the div in order to add the quiz objects to the container
      // we map through the quiz objects and sets the titles to li's.
      // must be a string because we're trying to dynamically create HTML
      quizMenu.innerHTML = this.quizzes.map(quiz => quiz.renderLi()).join('')
      // append the quizMenu to the main
      this.main.appendChild(quizMenu)
   }
}