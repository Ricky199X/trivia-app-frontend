// the page that lets us selects quizzes + categories

class Categories {
   constructor() {
      this.categories = []
      this.selectedCategoryQuizzes = []
      this.adapter = new TriviaAdapter()
      // gets all the components that that portion of the screen needs to work + adds event listeners
      this.initBindingAndEventListeners()
      this.fetchAndLoadCategories() // - calls to the backend, grabs categories from db, loads them to the page
      this.buildCategoryQuizzes() 
      this.selectCategory()
      this.getQuizzesByCategoryId()
      this.renderSelectedCategoryQuizzes()
   }

   initBindingAndEventListeners() {
      this.main = document.querySelector('#app-container')
      this.categoryDiv = document.createElement('div')
      this.categoryDiv.id = 'category-div'
      this.quizzesDiv = document.createElement('div')
      this.quizzesDiv.id = 'quizzes-div'
      // appends the div, to main 
      this.main.appendChild(this.categoryDiv)
   }
   
   fetchAndLoadCategories() {
      this.adapter
      .getCategories()
      .then(function(categoryJSON) {
         const categoryInfo = categoryJSON.data
         return categoryInfo
      })
      .then(categoryInfo => {
         this.categories = categoryInfo.map(function(categoryObject) {
            return new Category(categoryObject)
         })
      }) 
      .then(() => {
         this.renderCategories()
         this.selectCategory()
         this.buildCategoryQuizzes()
         this.getQuizzesByCategoryId(id)
         this.renderSelectedCategoryQuizzes()
      })
   }

    // need to set data-id on the thign I'm clicking
    // quiz url by category -> accepts the id 
   quizzesByCategoryUrl(id) {
      return `http://localhost:3000/categories/${id}/quizzes`
   }

   buildCategoryQuizzes(id) {
      // takes the id based on that id, itll render something
      // const num = parseInt(id)
      const selectedCategory = this.categories.find((category) => category.id === id)
      // return that selected category's id - we're going to fetch quizzes with it!
      const catId = selectedCategory.id
      this.getQuizzesByCategory(catId)
   }
   
   
 
   // at this point, when you click a category name, I want something to happen 
   // ideal outcome: click the category name -> then render the quizzes of that specific category 
   selectCategory() {
      const categoryLiList = document.querySelectorAll('li')

      for(let i = 0; i < categoryLiList.length; i++) {
         let element = categoryLiList[i]
         // want to add clickable event to each element of the category node list 
         element.addEventListener('click', (event) => {
            event.preventDefault()
            // now at this point, we want to call a function that will find the quizzes associated with that category that we clicked
            // need to construct renderCategoryQuizzes function within the category class
            const categoryId = event.target.dataset.id
            // console.log(categoryId)
            this.buildCategoryQuizzes(categoryId)
            
         })
      }
   }

   

    // get quizzes by category by number - needs to be passed in an id
    getQuizzesByCategory(id) {
      fetch(this.quizzesByCategoryUrl(id)).then(resp => {
         return resp.json()
      }).then(categoryQuizData => {
         const data = categoryQuizData.data
         return data
      }).then(data => {
         this.selectedCategoryQuizzes = data.map(function(quizObj) {
            return new Quiz(quizObj)
         })
         console.log(this.selectedCategoryQuizzes)
         return this.selectedCategoryQuizzes
      }).catch(err => {
         // Do something for an error here
        alert(err);
      })
      // fetch the quiz objects
      // use that info to populate this.quizzes in quizzes.js
      // map this.quizzes to DOM elements - just like with the categories
      // render those inside of this.quizzesDiv - before you render type "this.quizzesDiv.innerHTML = " " "
   }


   renderCategories() { 
      // strictly meant to render the names of the categories to the browser
      // creates a div for the category names
      this.categoryDiv.innerText = "Please select a category below!"
      // creates a list for the category types
      const categoryMenu = document.createElement('ul')
      categoryMenu.id = 'category-menu'
      // is SUPPOSED to map through the different category names and render to the category menu 
      categoryMenu.innerHTML = this.categories.map(category => category.renderCategoryLi()).join('')
      // appends the category menu to the category div
      this.categoryDiv.appendChild(categoryMenu)
   }


   // now render category quizzes to the dom
   renderSelectedCategoryQuizzes() {
      // // create the trivia container - div
      // const quizzesDiv = document.createElement('div')
      // quizDiv.id = 'quiz-div'
      this.quizzesDiv.innerText = "Let's get some text on the screen!"

      // creates a list for the quiz names
      const quizMenu = document.createElement('ul')
      quizMenu.id = 'quiz-menu'

      // we'll want to append html to the div in order to add the quiz objects to the container
      // we map through the quiz objects and sets the titles to li's.
      // must be a string because we're trying to dynamically create HTML
      quizMenu.innerHTML = this.selectedQuizzes.map(quiz => quiz.renderLi()).join('')

      quizDiv.appendChild(quizMenu)
      // append the quizMenu to the main
      this.main.appendChild(quizzesDiv)
   }


}