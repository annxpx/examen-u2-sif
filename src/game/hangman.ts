class HangmanGame{

    public remainingAttempts: number;
    public diccionario = [];
    public AnswerArray = [];
    public word: string;

    constructor(){
        this.seleccionarPalabra();
    }

    public seleccionarPalabra(){
        this.diccionario = [
            "manzana", "pera", "uva"
        ];
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
}