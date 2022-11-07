import { letter, letter_JSON } from "../models/attempt.model";
import { dataPaths } from "../utils/paths";
import fs from "fs";


    export const getLetter = (): letter[] =>{
            const path: string = dataPaths.attempts;
            const letter: letter_JSON[] = JSON.parse(fs.readFileSync(path,"utf8"));
            return letter.map((letter: letter_JSON)=>{
                return{
                    letter: letter.letter,
                };
            });
        };

        export const updateLetter = (letter: letter_JSON): void => {
            const path: string = dataPaths.attempts;
            const letterJson: letter_JSON[] = JSON.parse(fs.readFileSync(path,"utf8"));
          
            //attemptJson.push(word);

            const letterNew = Object.assign(letterJson, letter);
          
            fs.writeFileSync(path, JSON.stringify(letterNew), { encoding: "utf-8"});
          };