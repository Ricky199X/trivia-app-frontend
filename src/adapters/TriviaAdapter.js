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

   // // function to get sports category quizzes
   // getSportsCategoryQuizzes() {
   //    return fetch(this.sportCategoryURL).then(resp => {
   //       return resp.json()
   //    }).then(data => {
   //       return data
   //    }).catch(err => {
   //       alert(err)
   //    })
   // }

   // // function to get geography category quizzes
   // getGeographyCategoryQuizzes() {
   //    return fetch(this.geographyCategoryURL).then(resp => {
   //       return resp.json()
   //    }).then(data => {
   //       return data
   //    }).catch(err => {
   //       alert(err)
   //    })
   // }

   //  // function to get geography category quizzes
   //  getMusicCategoryQuizzes() {
   //    return fetch(this.musicCategoryURL).then(resp => {
   //       return resp.json()
   //    }).then(data => {
   //       return data
   //    }).catch(err => {
   //       alert(err)
   //    })
   // }

  



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
         // console.log(this.geographyQuizzes)
         return this.geographyQuizzes
      })
   }

}

