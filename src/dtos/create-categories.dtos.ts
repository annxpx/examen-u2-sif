import {Length, IsNotEmpty, IsOptional} from 'class-validator';
import from  "./services/categories.json";
export class CreateCategoryDto{
    
    @Length(3,50)
    @IsNotEmpty()
    name: string;

    @Length(2, 15)
    @IsOptional()
    words : [string];

}