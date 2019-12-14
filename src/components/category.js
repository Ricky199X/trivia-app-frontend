class Category {
   constructor(categoryJSON) {
      this.id = categoryJSON.id
      this.name = categoryJSON.attributes.name
      this.description = categoryJSON.attributes.description
   }

   renderCategoryLi() {
      return `<li>${this.name}</li>`
   }
}