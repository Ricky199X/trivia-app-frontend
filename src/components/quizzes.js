class Quizzes {
   constructor() {
      this.quizzes = []
      this.adapter = new TriviaAdapter()
      this.initBindingAndEventListeners()
      this.fetchAndLoadQuizzes()
   }

   initBindingAndEventListeners() {
      this.main = document.querySelector('main')
      // this.quizMenu = document.getElementById('quiz-container')
   }

   fetchAndLoadQuizzes() {
      this.adapter
      .getQuizzes()
         .then(function(quizObjects) {
            // had to access the data itself, could not iterate over just the quiz objects alone
            const quizInfo = quizObjects.data
            return quizInfo
         })
         // now we can map over the quiz data and push them into this.quizzes
         .then(quizInfo => {
            // iterate over each element of the quiz info node list, pass a new instance of a quiz object into this.quizzes
            // console.log(quizInfo)
            this.quizzes = quizInfo.map(function(quizObj) {
               return new Quiz(quizObj)
            })
         })
      .then(() => {
         this.render()
         // this.renderQuizQuestions()
      })
   }

   // render quizzes to the DOM - call after we get all the quizzes
   render() {
      // create the trivia container - div

      const quizDiv = document.createElement('div')
      quizDiv.id = 'quiz-div'

      // creates a list for the quiz names
      const quizMenu = document.createElement('ul')
      quizMenu.id = 'quiz-menu'

      // we'll want to append html to the div in order to add the quiz objects to the container
      // we map through the quiz objects and sets the titles to li's.
      // must be a string because we're trying to dynamically create HTML
      quizMenu.innerHTML = this.quizzes.map(quiz => quiz.renderLi()).join('')

      quizDiv.appendChild(quizMenu)

      // append the quizMenu to the main
      this.main.appendChild(quizDiv)
      console.log(this.quizzes)
   }

   

   renderQuizQuestions() {
      // create the question container - div

      const questionDiv = document.createElement('div')
      questionDiv.id = 'question-div'

       // creates a list for the questions 
       const questionList = document.createElement('ul')
       questionList.id = 'question-list'

      questionList.innerHTML = this.quizzes.map(quiz => quiz.renderQuestions()).join('')

      questionDiv.appendChild(questionList)
      this.main.appendChild(questionDiv)
      
   }
}