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
      // const quizMenu = document.getElementById('trivia-container')
      // quizMenu.innerHTML - "testing the div"
   }
}