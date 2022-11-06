import {writeFileSync, readFileSync, appendFileSync} from "node:fs";
import categoriesData from './categories.json';

export const getEntries = () => categoriesData
export const addEntry = () => null

/*class CategoriesService{

     private diccionario= [];

     constructor(){
        const path = "./categories.json";
        const fs = require("fs");
        this.diccionario = fs.JSON.parse(readFileSync(path, "utf8"));
     }

    public getList(){
        return this.diccionario;
    } 
//investigar como caer el write
//cambiar el enfoque de este codigo de categorias a palabras
    public create (){
    let id = Math.floor(Math.random() * 25);
    const path = "./categories.json";
    const data = "";
    const fs = require("fs");
    this.diccionario = fs.JSON.parse(writeFileSync(path,data,"utf8"));
    }
}*/
