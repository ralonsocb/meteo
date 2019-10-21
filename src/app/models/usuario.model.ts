import { RegistroDiario } from './registroDiario.model';
import { RegistroFacturacion} from './registroFacturacion.model';
import { Cliente } from './cliente.model';


export class Usuario {
  [x: string]: any;

    constructor (
        public nombre: string,
        public email: string,
        public password: string,
        public role?: string,
        public id?: string,
        public registrosHorarios?: RegistroDiario[],
        public facturacion?: RegistroFacturacion[],
        public clientes?: Cliente[],
    ) {

    }
}