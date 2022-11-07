import {writeFileSync, readFileSync, appendFileSync} from "node:fs";
import { Attempt, Attempt_JSON } from "../models/attempt.model";
import { dataPaths } from "../utils/paths";
import fs from "fs";


    export const getAttempt = (): Attempt[] =>{
            const path: string = dataPaths.attempts;
            const attemptJson: Attempt_JSON[] = JSON.parse(fs.readFileSync(path,"utf8"));
            return attemptJson.map((attempt: Attempt_JSON)=>{
                return{
                    palabra_0: attempt.palabra_0,
                    intentos: attempt.intentos,
                    palabra: attempt.palabra,
                    mensaje: attempt.mensaje,
                    letra: attempt.letra
                };
            });
        };

        export const updateAttempt = (word: Attempt_JSON): void => {
            const path: string = dataPaths.attempts;
            const attemptJson: Attempt_JSON[] = JSON.parse(fs.readFileSync(path,"utf8"));
          
            //attemptJson.push(word);

            const newAttempt = Object.assign(attemptJson, word);
          
            fs.writeFileSync(path, JSON.stringify(newAttempt), { encoding: "utf-8", flag: "w+" });
          };