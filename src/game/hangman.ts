class HangmanGame{

    public remainingLetters: number;
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
        this.remainingLetters = this.word.length;
    }

    public Juego(){
        while(this.remainingLetters>0){
            alert(this.AnswerArray.join(" "));
            //console.log(ingrese la letra);
            let guess: string;
            if(guess == null){
                break;
            }else if(guess.length !== 1){
                alert("Solo se debe ingresar una letra")
            }else{
                for(let j = 0; j < this.word.length; j++){
                    if(this.word[j] === guess){
                        this.AnswerArray[j] = guess;
                        this.remainingLetters--;
                    }
                }
            }
        }
    }
}