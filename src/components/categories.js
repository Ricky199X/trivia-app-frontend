class Categories {
   constructor() {
      this.categories = []
      this.adapter = new TriviaAdapter()
      this.initBindingAndEventListeners()
      this.fetchAndLoadCategories()
      this.addEventListenersToCategories()
   }

   initBindingAndEventListeners() {
      this.main = document.querySelector('main')
      // this.categoryLiList = document.querySelectorAll('li')
   }
   
   fetchAndLoadCategories() {
      this.adapter
      .getCategories()
      .then(function(categoryJSON) {
         const categoryInfo = categoryJSON.data
         // console.log(categoryInfo)
         return categoryInfo
      })
      .then(categoryInfo => {
         // console.log(categoryInfo)
         this.categories = categoryInfo.map(function(categoryObject) {
            // console.log(categoryObject)
            return new Category(categoryObject)
         })
      }) 
      .then(() => {
         this.renderCategories()
         this.addEventListenersToCategories()
      })
   }
   renderCategories() {
      // creates a div for the category names
      const categoryDiv = document.createElement('div')
      categoryDiv.id = 'category-div'
      categoryDiv.innerText = "Please select a category below!"

      // creates a list for the category types
      const categoryMenu = document.createElement('ul')
      categoryMenu.id = 'category-menu'

      // is SUPPOSED to map through the different category names and render to the category menu 
      categoryMenu.innerHTML = this.categories.map(category => category.renderCategoryLi()).join('')

      // appends the category menu to the category div
      categoryDiv.appendChild(categoryMenu)

      // appends the div, to main 
      this.main.appendChild(categoryDiv)
   }

 
   // at this point, when you click a category name, I want something to happen 
   // ideal outcome: click the category name -> then render the quizzes of that specific category 

   // idea is to add click event to each category li
   addEventListenersToCategories() {
      const categoryLiList = document.querySelectorAll('li')

      for(let i = 0; i < categoryLiList.length; i++) {
         let element = categoryLiList[i]
         // want to add clickable event to each element of the category node list 
         console.log(element.innerHTML)
         element.addEventListener('click', function(event) {
            alert('You clicked a category - nice job!')
         })
      }
   }


}