import { s_word, s_word_JSON } from "../models/attempt.model";
import { dataPaths } from "../utils/paths";
import fs from "fs";
import { Json } from "sequelize/types/utils";


    export const getS_word = (): s_word[] =>{
            const path: string = dataPaths.attempts;
            const s_word: s_word_JSON[] = JSON.parse(fs.readFileSync(path,"utf8"));
            return s_word.map((s_word: s_word_JSON)=>{
                return{
                    word: s_word.word,
                };
            });
        };

        export const _updateS_word = (word: string): void =>{
            const path: string = dataPaths.s_word;
            const s_wordJson: s_word_JSON = JSON.parse(fs.readFileSync(path,"utf8"),);
            console.log("s_wordJson");
            console.log(s_wordJson);

            const prueba = JSON.stringify(word);
            console.log("prueba");
            console.log(prueba);

            const s_wordNew = Object.assign(s_wordJson, prueba);
            console.log("s_wordNew");
            console.log(s_wordNew);
          
            fs.writeFileSync(path, JSON.stringify(s_wordJson), { encoding: "utf-8"});
        }

        export const updateS_word = (word: s_word_JSON): void => {
            const path: string = dataPaths.s_word;
            const s_wordJson: s_word_JSON[] = JSON.parse(fs.readFileSync(path,"utf8"),);

            const s_wordNew = Object.assign(s_wordJson, word);
          
            fs.writeFileSync(path, JSON.stringify(s_wordNew), { encoding: "utf-8"});
          };