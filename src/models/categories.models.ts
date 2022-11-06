import 'reflect-metadata';
import 'es6-shim';
import {plainToClass} from 'class-transformer';
import 'class-validator';
export class CategoriesModel{
        id: number;
        name: string;
        words: [string];
      
        public getCategory() {
          return this.name + ' ' + this.words;
        }

}
fetch('/src/services/categories.json').then((categories: Object[]) => {
  const realCategories = plainToClass(CategoriesModel, categories)
    categories[0].getCategory
});

    
