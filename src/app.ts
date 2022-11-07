import express,{json} from 'express' ;
import {WordsController} from "./controllers/words.controller";
import { CategoriesController } from './controllers/categories.controller';
import 'dotenv/config';
class App {

    public express: express.Application;

    categoriesController: CategoriesController;
    wordsController: WordsController;

    constructor(){
        this.express = express();
        this.middlewares();
        this.controllers();
        this.routes();
    }

    middlewares(){
        this.express.use(json());
    }
    routes(){
        this.express.use('/api', this.categoriesController.router);
        this.express.use('/api', this.wordsController.router);

    }

    listen(port: number) {
        this.express.listen(port, 
            () => console.log(`Server run in: http://localhost:${port}`));
    }

    controllers(){
        this.categoriesController = new CategoriesController();
        this.wordsController = new WordsController();
    }

}

export default new App();