import { Cliente } from './cliente.model';
export class RegistroFacturacion{
    [x: string]: any;

    constructor(
        public fecha: Date,
        public horasNormales: number,
        public cliente: Cliente,
        public horasExtra?: number,
        public horasTotalesDiarias?: number,
        public horasTotalesExtra?: number,
        public observaciones?: string,
    ){}
}