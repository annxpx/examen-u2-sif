import express,{json} from 'express' ;
import {WordsController} from "./controllers/words.controller";
import { CategoriesController } from './controllers/categories.controller';
import { AttemptController } from './controllers/attempt.controller';
import { S_WordController } from './controllers/s_word.controller';
import 'dotenv/config';
class App {

    public express: express.Application;

    categoriesController: CategoriesController;
    wordsController: WordsController;
    attemptController: AttemptController;
    s_WordController: S_WordController;

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
        this.express.use('/api', this.attemptController.router);
        this.express.use('/api', this.s_WordController.router);
    }

    listen(port: number) {
        this.express.listen(port, 
            () => console.log(`Server run in: http://localhost:${port}`));
    }

    controllers(){
        this.categoriesController = new CategoriesController();
        this.wordsController = new WordsController();
        this.attemptController = new AttemptController();
        this.s_WordController = new S_WordController();
    }

}

export default new App();