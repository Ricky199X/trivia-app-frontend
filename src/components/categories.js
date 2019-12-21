// the page that lets us selects quizzes + categories

class Categories {
   constructor() {
      this.categories = []
      this.categoryQuizzes = []
      this.adapter = new TriviaAdapter()
      // gets all the components that that portion of the screen needs to work + adds event listeners
      this.initBindingAndEventListeners()
      this.fetchAndLoadCategories() // - calls to the backend, grabs categories from db, loads them to the page
      this.buildCategoryQuizzes() 
      this.selectCategory()
   }

   initBindingAndEventListeners() {
      this.main = document.querySelector('#category-selector')
      this.categoryDiv = document.createElement('div')
      this.categoryDiv.id = 'category-div'
      this.quizzesDiv = document.createElement('div')
      this.quizzesDiv.id = 'quizzes-div'
      // appends the div, to main 
      this.main.appendChild(this.categoryDiv)
   }
   
   // async fetchAndLoadCategories() {
   //    this.adapter
   //    .getCategories()
   //    .then(function(categoryJSON) {
   //       const categoryInfo = categoryJSON.data
   //       return categoryInfo
   //    })
   //    .then(categoryInfo => {
   //       this.categories = categoryInfo.map(function(categoryObject) {
   //          return new Category(categoryObject)
   //       })
   //    }) 
   //    .then(() => {
   //       this.renderCategories()
   //       this.selectCategory()
   //       this.buildCategoryQuizzes()
   //       this.getQuizzesByCategory(id)
   //    })
   // }


   async fetchAndLoadCategories() {
      this.categories = await Category.retrieveAll()
      this.renderCategories()
   }

   buildCategoryQuizzes(id) {
      // takes the id based on that id, itll render something
      // const num = parseInt(id)
      const selectedCategory = this.categories.find((category) => category.id === id)
      // return that selected category's id - we're going to fetch quizzes with it!
      console.log(selectedCategory.id)
      this.getQuizzesByCategory(selectedCategory.id)
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

 
   // at this point, when you click a category name, I want something to happen 
   // ideal outcome: click the category name -> then render the quizzes of that specific category 
   selectCategory() {
      const categoryLiList = document.querySelectorAll('li')

      for(let i = 0; i < categoryLiList.length; i++) {
         let element = categoryLiList[i]
         // want to add clickable event to each element of the category node list 
         element.addEventListener('click', (event) => {
            // now at this point, we want to call a function that will find the quizzes associated with that category that we clicked
            // need to construct renderCategoryQuizzes function within the category class
            const categoryId = event.target.dataset.id
            // console.log(categoryId)
            this.buildCategoryQuizzes(categoryId)
            
         })
      }
   }


}