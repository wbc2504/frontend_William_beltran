import { Tipo } from "./tipo";

export class Festivo {
    public id: number;
    public tipo: Tipo | null;
    public nombre: String;
    public dia: number;
    public mes: number;
    public diaPascua: number;
    public fecha: Date;

    constructor(id: number,
        tipo: Tipo | null,
        nombre: String,
        dia: number,
        mes: number,
        diaPascua: number,
        fecha: Date){
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.dia = dia;
        this.mes = mes;
        this.diaPascua = diaPascua;
        this.fecha = fecha;
        }
}
