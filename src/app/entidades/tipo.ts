import { Festivo } from "./festivo";

export class Tipo{
    public id: number;
    public nombre: string;
    public festivo: Festivo | null;

    constructor(id: number,
        nombre: string,
        festivo: Festivo | null){
        this.id = id;
        this.nombre = nombre;
        this.festivo =festivo;            
        }
}