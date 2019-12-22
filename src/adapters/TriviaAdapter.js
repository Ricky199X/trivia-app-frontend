class TriviaAdapter {
   constructor() {
      this.baseUrl = "http://localhost:3000/quizzes"
      this.categoryUrl = "http://localhost:3000/categories"
      this.sportCategoryURL = "http://localhost:3000/categories/1/quizzes"
      this.musicCategoryURL = "http://localhost:3000/categories/2/quizzes"
      this.geographyCategoryURL = "http://localhost:3000/categories/3/quizzes"

   }


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

