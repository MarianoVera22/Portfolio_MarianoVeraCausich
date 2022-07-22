import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class Educacion {
  id?: number;
  nombreEd: string;
  descripcionEd: string;
  fechaEd: string;
  lugarEd: string;

  constructor(nombreEd: string, descripcionEd: string, fechaEd: string, lugarEd: string) {
    this.nombreEd = nombreEd;
    this.descripcionEd = descripcionEd;
    this.fechaEd = fechaEd;
    this.lugarEd = lugarEd;
  }
}
