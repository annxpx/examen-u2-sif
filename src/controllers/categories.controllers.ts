//import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Router, Request, Response } from "express";
import categoriesService from "../services/categories.service";

export class CategoriesController {
    router = Router();
    
    constructor(){
        this.initRoutes();
    }

    initRoutes(){
        this.router.get('/categories', this.getListCategories);
    }

    async getListCategories(req: Request, res: Response): Promise<Response>{
        const categories = await categoriesService.getList();
        return res.json(categories);
    }
}