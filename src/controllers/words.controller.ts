import { Router, Request, Response } from "express";
import { Word } from "../models/word.model";
import {getWords,getWordById,insertWord,} from "../services/word.service";

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
  insertWord(_req.body);

  return res.status(204).send("Word inserted");
}

}