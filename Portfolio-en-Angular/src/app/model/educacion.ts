export class Educacion {
  id?: number;
  nombreEd: string;
  descripcionEd: string;
  fechaEd: string;

  constructor(nombreEd: string, descripcionEd: string, fechaEd: string) {
    this.nombreEd = nombreEd;
    this.descripcionEd = descripcionEd;
    this.fechaEd = fechaEd;
  }
}
