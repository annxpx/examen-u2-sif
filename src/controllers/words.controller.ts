import { Router, Request, Response } from "express";import { Word } from "../models/word.model";
import {getWords,getWordById,insertWord,} from "../services/word.service";
import {CreateWordsDtos} from "../models/word.model";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
export class WordsController{
  router = Router();
  constructor(){
    this.initRoutes();
}
initRoutes(){
    this.router.get('/words', this.getWords);
    this.router.get('/words/:id', this.getWordById) ;
    this.router.post('/words', this.insertWord);

}

async getWords(_req: Request, res: Response) : Promise<Response>{
  const words: Word[] = await getWords();
  return res.send(words);
}
async getWordById(_req: Request, res: Response) : Promise<Response>{
  const word: Word | undefined = await getWordById(Number(_req.params.id));

  if (!word) return res.status(404).send("Word not found");

  return res.send(word);
}
async insertWord(_req: Request, res: Response) : Promise<Response>{
 
 const payload = _req.body;
 let createWordsDtos = plainToClass(CreateWordsDtos, payload);
        const errors = await validate(createWordsDtos);
        if(errors.length > 0){
          console.log(errors);
          return res.status(400).json({
              "Valdation-errors" : errors
          });
      }
   //   return res.json(
    //      await insertWord(payload));
    insertWord(_req.body);
  return res.status(204).send("Word inserted");
}

}