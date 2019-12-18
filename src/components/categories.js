class Categories {
   constructor() {
      this.categories = []
      this.categoryQuizzes = []
      this.sportsQuizzes = []
      this.adapter = new TriviaAdapter()
      this.initBindingAndEventListeners()
      this.fetchAndLoadCategories()
      this.fetchSportsQuizzes()
      this.fetchGeographyQuizzes()
      this.fetchMusicQuizzes()
      this.selectCategory()
   }

   initBindingAndEventListeners() {
      this.main = document.querySelector('main')
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
      })
   }

   // fetch music quizzes
   fetchMusicQuizzes() {
      this.adapter
      .getMusicCategoryQuizzes()
      .then(function(categoryQuizJSON) {
         const musicCatQuizzes = categoryQuizJSON.data
         return musicCatQuizzes
      }).then(musicCatQuizzes => {
         this.musicQuizzes = musicCatQuizzes.map(function(musicObj) {
            return musicObj.attributes
         })
         return this.musicQuizzes
      })
   }

   // fetch sporrts quizzes
   fetchSportsQuizzes() {
      this.adapter
      .getSportsCategoryQuizzes()
      .then(function(categoryQuizJSON) {
         const sportsCatQuizzes = categoryQuizJSON.data
         return sportsCatQuizzes
      }).then(sportsCatQuizzes => {
         this.sportsQuizzes = sportsCatQuizzes.map(function(sportsObj) {
            return sportsObj.attributes
         })
         return this.sportsQuizzes
      })
   }

   // fetch geography quizzes
   fetchGeographyQuizzes() {
      this.adapter
      .getGeographyCategoryQuizzes()
      .then(function(categoryQuizJSON) {
         const geographyCatQuizzes = categoryQuizJSON.data
         return geographyCatQuizzes
      }).then(geographyCatQuizzes => {
         this.geographyQuizzes = geographyCatQuizzes.map(function(geographyObj) {
            return geographyObj.attributes
         })
         return this.geographyQuizzes
      })
   }


   
   renderCategories() { // strictly meant to render the names of the categories to the browser
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
   selectCategory() {
      const categoryLiList = document.querySelectorAll('li')

      for(let i = 0; i < categoryLiList.length; i++) {
         let element = categoryLiList[i]
         // want to add clickable event to each element of the category node list 
         element.addEventListener('click', function(event) {
            // alert(`You clicked ${event.currentTarget.innerHTML} - nice job!`)
            // now at this point, we want to call a function that will find the quizzes associated with that category that we clicked
            // need to construct renderCategoryQuizzes function within the category class
            let categoryId = event.target.dataset.id
            console.log(categoryId)
            // pass category name into another function which will then take that id and fetch the correct catrorys' id pased on that id passed
            fetchQuizzesByCategoryId(categoryId)
         })
      }
   }


}