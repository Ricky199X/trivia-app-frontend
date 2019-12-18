class TriviaAdapter {
   constructor() {
      this.baseUrl = "http://localhost:3000/quizzes"
      this.categoryUrl = "http://localhost:3000/categories"
      this.sportCategoryURL = "http://localhost:3000/categories/1/quizzes"
      this.musicCategoryURL = "http://localhost:3000/categories/2/quizzes"
      this.geographyCategoryURL = "http://localhost:3000/categories/3/quizzes"

   }

   // need to set data-id on the thign I'm clicking
   // quiz url by category -> accepts the id 

   // function to get category names
   getCategories() {
      return fetch(this.categoryUrl).then(resp => {
         return resp.json()
      }).then(data => {
         // console.log(data)
         return data
      }).catch(err => {
         alert(err)
      })
   }

   // function to get sports category quizzes
   getSportsCategoryQuizzes() {
      return fetch(this.sportCategoryURL).then(resp => {
         return resp.json()
      }).then(data => {
         return data
      }).catch(err => {
         alert(err)
      })
   }

   // function to get geography category quizzes
   getGeographyCategoryQuizzes() {
      return fetch(this.geographyCategoryURL).then(resp => {
         return resp.json()
      }).then(data => {
         return data
      }).catch(err => {
         alert(err)
      })
   }

   

   getQuizzes() {
      return fetch(this.baseUrl).then(response => {
         // console.log(response);
         return response.json();
       }).then(data => {
         // Work with JSON data here
         return data
       }).catch(err => {
         // Do something for an error here
        alert(err);
       })
   }
}

