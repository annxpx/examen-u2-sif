import { Length, IsNotEmpty, IsInt, Min, Max } from "class-validator";

export class CreateWordsDtos{
  @Length(3,50)
  @IsNotEmpty()
  word: string;
  @IsInt()
  @Min(1)
  @Max(4)
  categoryId : number;
}
export interface Word_JSON {
    id: number;
    word: string;
    categoryId: number;
  }
  
  export interface Category_JSON{
    id: number;
    name: string;
  }
  
  export type Word ={
    id: number;
    word: string;
    category: Category;
  }
  
  export interface Category{
    id: number;
    name: string;
  }