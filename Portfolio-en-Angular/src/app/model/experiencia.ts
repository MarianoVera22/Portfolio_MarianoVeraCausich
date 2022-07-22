export class Experiencia {
  id?: number;
  nombreE: string;
  descripcionE: string;
  fechaE: string;
  lugarE: string;

  constructor(nombreE: string, descripcionE: string, fechaE: string, lugarE: string) {
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    this.fechaE=fechaE;
    this.lugarE=lugarE;
  }

  
}
