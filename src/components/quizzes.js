class Quizzes {
   constructor() {
      this.selectedQuizzes = []
      this.adapter = new TriviaAdapter()
      this.initBindingAndEventListeners()
   }

   initBindingAndEventListeners() {
      this.main = document.querySelector('#app-container')
      this.quizzesDiv = document.createElement('div')
      this.quizzesDiv.id = 'quizzes-div'
      this.quizMenu = document.createElement('ul')
      this.quizMenu.id = 'quiz-menu'
   }

   
    // now render category quizzes to the dom
    renderSelectedCategoryQuizzes() {
      this.quizzesDiv.innerText = "Let's get some text on the screen!"
      this.quizMenu.innerHTML = this.selectedQuizzes.map(quiz => quiz.renderLi()).join('')
      this.quizzesDiv.appendChild(this.quizMenu)
      // append the quizMenu to the main
      this.main.appendChild(this.quizzesDiv)
   }




   // renderQuizQuestions() {
   //    // create the question container - div

   //    const questionDiv = document.createElement('div')
   //    questionDiv.id = 'question-div'

   //     // creates a list for the questions 
   //     const questionList = document.createElement('ul')
   //     questionList.id = 'question-list'

   //    questionList.innerHTML = this.quizzes.map(quiz => quiz.renderQuestions()).join('')

   //    questionDiv.appendChild(questionList)
   //    this.main.appendChild(questionDiv)
      
   // }
}