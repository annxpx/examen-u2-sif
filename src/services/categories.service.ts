import {Request, Response} from 'express';
import {writeFileSync, readFileSync, appendFileSync} from "node:fs";

class CategoriesService{

     private diccionario= [
        {id: 1, name: 'Escritorios', description: ""},
        {id: 2, name: 'Computadoras', description: ""},
     ];

     constructor(){
        const path = './categories.json';
        const fs = require("fs");
        let rawdata = fs.readFileSync('../categories.json');
        let categories = JSON.parse(rawdata);
        console.log(categories);
        //this.diccionario = JSON.parse(readFileSync("./words.json", "utf8"));
     }

    public async getList(){
        return this.diccionario;
    } 
//investigar como caer el write
//cambiar el enfoque de este codigo de categorias a palabras
    /*public create (){
    let id = Math.floor(Math.random() * 25);
    const path = "./categories.json";
    const data = "";
    const fs = require("fs");
    //this.diccionario = fs.JSON.parse(writeFileSync(path,data,"utf8"));
    }*/
}

export default new CategoriesService();
