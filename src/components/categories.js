class Categories {
   constructor() {
      this.categories = []
      this.adapter = new TriviaAdapter()
      // this.initBindingAndEventListeners()
      this.fetchAndLoadCategories()
   }

   // initBindingAndEventListeners() {
   //    this.main = document.querySelector('main')
   //    // this.categoryMenu = document.getElementById('category-container')
   // }
   
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
      })
   }
   renderCategories() {
      // create the category container - div
      const main = document.querySelector('main')

      // creates a div for the category names
      const categoryDiv = document.createElement('div')
      categoryDiv.id = 'category-div'

      // creates a list for the category types
      const categoryMenu = document.createElement('ul')
      categoryMenu.id = 'category-menu'

      // is SUPPOSED to map through the different category names and render to the category menu 
      categoryMenu.innerHTML = this.categories.map(category => category.renderCategoryLi()).join('')

      // appends the category menu to the category div
      categoryDiv.appendChild(categoryMenu)

      // appends the div, to main 
      main.appendChild(categoryDiv)
   }

}