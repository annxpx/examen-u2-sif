import 'reflect-metadata';
import 'es6-shim';
import 'class-transformer';
import 'class-validator';
export class CategoriesModel{
        id: number;
        name: string;
        words: [string];
      
        getCategory() {
          return this.name + ' ' + this.words;
        }

}

    
fetch("/src/services/categories.json").then((categories: Object[]) => {
    const realCategories = plainToClass(CategoriesModel, categories);
    // now each user in realUsers is an instance of User class
  });