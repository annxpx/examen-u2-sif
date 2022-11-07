import { Router, Request, Response } from "express";
import { s_word, s_word_JSON} from "../models/attempt.model";
import {getS_word, updateS_word} from "../services/s_word.service";

export class S_WordController{
  router = Router();

  constructor(){
    this.initRoutes();
}
initRoutes(){
    this.router.get('/s_word', this.getS_word);
    this.router.post('/s_word', this.updateS_word);

}

async getS_word(_req: Request, res: Response) : Promise<Response>{
  const s_word: s_word[] = await getS_word();
  return res.send(s_word);
}

async updateS_word(_req: Request, res: Response) : Promise<Response>{
  updateS_word(_req.body);

  return res.status(204).send("Attempt Send");
}

}