import { s_word_JSON } from "../models/attempt.model";
import { dataPaths } from "../utils/paths";
import fs from "fs";
import { Json } from "sequelize/types/utils";

class s_word{
    word: string
}

    export const getS_word = (): s_word[] =>{
            const path: string = dataPaths.attempts;
            const s_word: s_word_JSON[] = JSON.parse(fs.readFileSync(path,"utf8"));
            return s_word.map((s_word: s_word_JSON)=>{
                return{
                    word: s_word.word,
                };
            });
        };

        export const insertS_word = (word: string): void => {
            const path: string = dataPaths.s_word;
            const prueba : s_word = JSON.parse(fs.readFileSync(path,"utf8"),);
            const s_wordJson: s_word_JSON[] = JSON.parse(fs.readFileSync(path,"utf8"),);

            //s_wordJson.push(word);
            const newJson = Object.assign(prueba.word, word);
          
            fs.writeFileSync(path, JSON.stringify(newJson), { encoding: "utf-8", flag: "w+"} );
          };

          const getWordJSON = (): s_word_JSON[] => {
            const path: string = dataPaths.s_word;
            return JSON.parse(fs.readFileSync(path, "utf8"));
          };