import { Attempt, Attempt_JSON, s_word, s_word_JSON } from "../models/attempt.model";
import { dataPaths } from "../utils/paths";
import fs from "fs";
import { getJustWords, getWordById } from "./word.service";
import hangmanGame from "../game/hangman";
import { insertS_word} from "./s_word.service";
import { json } from "sequelize";
import { plainToClass } from "class-transformer";
import s_wordJSON from '../data/s_word.json';
import attemptsJSON from '../data/attempts.json';

export const getAttempt = (): any =>{
    const data = attemptsJSON;
    if(data.find((a) => a.attempts !== "0")){
        return data;
    }else{
        hangmanGame.seleccionarPalabra();
        const word = hangmanGame.word;
        console.log(`la palabra es: ${word}`);
        const words = s_wordJSON;
        words.forEach(w => {
            w.word = word;
         });
    }
};


export const updateAttempt = (word: Attempt_JSON): void => {
    const path: string = dataPaths.attempts;
    const attemptJson: Attempt_JSON[] = JSON.parse(fs.readFileSync(path,"utf8"));
          
    //attemptJson.push(word);

    const newAttempt = Object.assign(attemptJson, word);
          
    fs.writeFileSync(path, JSON.stringify(newAttempt), { encoding: "utf-8"});
};        