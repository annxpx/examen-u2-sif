import { Category } from "../models/word.model";
import {getCategories, getCategoryById} from "../services/category.service";
import { Router, Request, Response } from "express";

export class CategoriesController{
  router = Router();
  constructor(){
    this.initRoutes();
}
initRoutes(){
    this.router.get('/categories', this.getCaregories);
    this.router.get('/categories/:id', this.getCategoryById) ;
}

async getCaregories(_req: Request, res: Response) : Promise<Response>{
  const categories: Category[] = await getCategories();
  return res.send(categories);
}

 async getCategoryById(_req: Request, res: Response) : Promise<Response>{
  const category: Category | undefined = await getCategoryById(
    Number(_req.params.id)
  );

  if (!category) return res.status(404).send("Category not found");

  return res.send(category);
 }
 
 
}

//const router = express.Router();

/*router.get("/", (_req, res) => {
  const categories: Category[] = getCategories();
  res.send(categories);
});

router.get("/:id", (_req, res) => {
  const category: Category | undefined = getCategoryById(
    Number(_req.params.id)
  );

  if (!category) return res.status(404).send("Category not found");

  return res.send(category);
});

export default router;*/