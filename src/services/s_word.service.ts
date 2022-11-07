import { s_word, s_word_JSON } from "../models/attempt.model";
import { dataPaths } from "../utils/paths";
import fs from "fs";


    export const getS_word = (): s_word[] =>{
            const path: string = dataPaths.attempts;
            const s_word: s_word_JSON[] = JSON.parse(fs.readFileSync(path,"utf8"));
            return s_word.map((s_word: s_word_JSON)=>{
                return{
                    word: s_word.word,
                };
            });
        };

        export const updateS_word = (word: s_word_JSON): void => {
            const path: string = dataPaths.attempts;
            const s_wordJson: s_word_JSON[] = JSON.parse(fs.readFileSync(path,"utf8"));
          
            //attemptJson.push(word);

            const s_wordNew = Object.assign(s_wordJson, word);
          
            fs.writeFileSync(path, JSON.stringify(s_wordNew), { encoding: "utf-8"});
          };