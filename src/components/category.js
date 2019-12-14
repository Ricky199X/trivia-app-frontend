class Category {
   constructor(categoryJSON) {
      this.id = categoryJSON.id
      this.name = categoryJSON.attributes.name
      this.description = categoryJSON.attributes.description
   }

   renderLi() {
      return `<li>${this.name}</li>`
   }
}