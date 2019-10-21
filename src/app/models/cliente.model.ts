


export class Cliente {
  [x: string]: any;

    constructor (
        public nombre: string,
        public proyectos?: string[],
        public responsables?: string[]
        ) {

    }
}