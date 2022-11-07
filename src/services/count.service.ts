import { Attempt, Attempt_JSON, s_word, s_word_JSON } from "../models/attempt.model";
import { dataPaths } from "../utils/paths";
import fs from "fs";
import { getJustWords } from "./word.service";
import hangmanGame from "../game/hangman";
import { updateS_word, _updateS_word} from "./s_word.service";
import { json } from "sequelize";
import { plainToClass } from "class-transformer";

//hangmanGame;

export const getAttempt = (): Attempt[] =>{
    const path: string = dataPaths.attempts;
    const attemptJson: Attempt_JSON[] = JSON.parse(fs.readFileSync(path,"utf8"));
    if(attemptJson.find((a) => a.attempts !=0)){
        return attemptJson.map((attempt: Attempt_JSON)=>{
            return{
                attempts: attempt.attempts,
                word: attempt.word,
                message: attempt.message,
            };
        });
    }else{
        hangmanGame.seleccionarPalabra();
        //const a: s_word_JSON; 
        //a.word = hangmanGame.word;
        _updateS_word(hangmanGame.word);
        //console.log(hangmanGame.word);
        console.log("Es cero");
    }
};

export const updateAttempt = (word: Attempt_JSON): void => {
    const path: string = dataPaths.attempts;
    const attemptJson: Attempt_JSON[] = JSON.parse(fs.readFileSync(path,"utf8"));
          
    //attemptJson.push(word);

    const newAttempt = Object.assign(attemptJson, word);
          
    fs.writeFileSync(path, JSON.stringify(newAttempt), { encoding: "utf-8"});
};


        
/*class HangmanGame{
    public remainingAttempts: number;
    public diccionario = [];
    public AnswerArray = [];
    public word: string;
    constructor(){
        this.seleccionarPalabra();
    }

    public seleccionarPalabra(){
        this.diccionario = getJustWords();
        this.word = this.diccionario[Math.floor(Math.random() * this.diccionario.length)];
        for(let i = 0; i < this.word.length; i++){
            this.AnswerArray[i]="_";
        }
        this.remainingAttempts = this.CalcularIntentos(this.word);
    }

    public CalcularIntentos(word:string){
        const attempts: number = Math.floor(word.length/2);
        return(attempts);
    }

    public Juego(){
        while(this.remainingAttempts>0){
            alert(this.AnswerArray.join(" "));
            let guess: string;
            if(guess == null){
                break;
            }else if(guess.length !== 1){
                alert("Solo se debe ingresar una letra")
            }else{
                for(let j = 0; j < this.word.length; j++){
                    if(this.word[j] === guess){
                        this.AnswerArray[j] = guess;
                        this.remainingAttempts--;
                    }
                }
            }
        }
    }
}*/