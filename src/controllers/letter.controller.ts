import { Router, Request, Response } from "express";
import { letter, letter_JSON} from "../models/attempt.model";
import {getLetter, updateLetter} from "../services/letter.service";

export class LetterController{
  router = Router();

  constructor(){
    this.initRoutes();
}
initRoutes(){
    this.router.get('/letter', this.getLetter);
    this.router.post('/letter', this.updateLetter);

}

async getLetter(_req: Request, res: Response) : Promise<Response>{
  const letter: letter[] = await getLetter();
  return res.send(letter);
}

async updateLetter(_req: Request, res: Response) : Promise<Response>{
  updateLetter(_req.body);

  return res.status(204).send("Attempt Send");
}

}