
import { Word } from "../models/word.model";
import { getJustWords, getWordById } from "../services/word.service";

class HangmanGame{

    public remainingAttempts: number;
    public diccionario = [];
    public AnswerArray = [];
    public word: string;

    constructor(){
        this.seleccionarPalabra();
    }


    public seleccionarPalabra(){
        let id = Math.floor(Math.random() * 100)
        let flag = 0;
        /*while(flag == 0){
            this.word = getWordById(id);
            console.log(this.word);
            for(let i = 0; i < this.word.length; i++){
                this.AnswerArray[i]="_";
            }
            this.remainingAttempts = this.CalcularIntentos(this.word);
            flag = 1;
        }*/
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
}
export default new HangmanGame();