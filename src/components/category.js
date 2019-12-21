// this class is not in charge of managing a portion of the page, it's in charge of managing an object.

class Category {
   constructor(categoryJSON) {
      this.id = categoryJSON.id
      this.name = categoryJSON.attributes.name
      this.description = categoryJSON.attributes.description
   }

   renderCategoryLi() {
      return `<li data-id="${this.id}">${this.name}</li>`
   }

   renderCategoryQuizzes() {
      return `<li>${categoryName.quizzes}</li>`
   }

   // static async retrieveAll() {
   //    try {
   //       const json = await TriviaAdapter.instance.getCategories()
   //    }
   // }
}

// page manag