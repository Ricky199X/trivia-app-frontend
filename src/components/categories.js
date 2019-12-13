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
      .then(function(categoryObjects) {
         const categoryInfo = categoryObjects
         console.log(categoryInfo)
      })



   }
}