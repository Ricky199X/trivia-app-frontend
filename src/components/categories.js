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
         console.log(categoryInfo)
         return categoryInfo
      })
      .then(categoryInfo => {
         this.categories = categoryInfo.map(function(categoryObject) {
            return new Category(categoryObject)
         })
      }) 



   }
}