import { Router, Request, Response } from "express";
import { Attempt} from "../models/attempt.model";
import {getAttempt,updateAttempt} from "../services/count.service";

export class AttemptController{
  router = Router();

  constructor(){
    this.initRoutes();
}
initRoutes(){
    this.router.get('/game', this.getAttempt);
    this.router.post('/game', this.updateAttempt);

}

async getAttempt(_req: Request, res: Response) : Promise<Response>{
  const attempt: Attempt[] = await getAttempt();
  return res.send(attempt);
}

async updateAttempt(_req: Request, res: Response) : Promise<Response>{
  updateAttempt(_req.body);

  return res.status(204).send("Attempt Send");
}

}