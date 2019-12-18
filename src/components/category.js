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
}