class Categories {
   constructor() {
      this.categories = []
      this.adapter = new TriviaAdapter()
      // this.initBindingAndEventListeners()
      this.fetchAndLoadCategories()
   }

   // initBindingAndEventListeners() {
   //    this.main = document.querySelector('main')
   //    this.categoryMenu = document.getElementById
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
      const categoryDiv = document.createElement('div')
      categoryDiv.id = 'category-div'
      const categoryMenu = document.createElement('ul')
      categoryMenu.id = 'category-container'

      categoryMenu.innerHTML = this.categories.map(category => category.renderLi()).join('')

      categoryMenu.append(categoryDiv)
      this.main.appendChild(categoryDiv)
   }

}