import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-acerca-de-texto',
  templateUrl: './acerca-de-texto.component.html',
  styleUrls: ['./acerca-de-texto.component.css'],
})
export class AcercaDeTextoComponent implements OnInit {
  textoAcercaDeMi?: string;
  activo?: string;

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.textoAcercaDeMi =
      'Nacido en la ciudad de Colonia Caroya, Córdoba, Argentina soy un joven estudiante que se embarco en el mundo de la tecnología en el 2014 empezando la carrera universitaria de Ingenieria Electrónica. Tras primeros años de tropiezos en el area de la programación logre superarme y encontrar la pasión en la codificación cumpliendo con los objetivos planteados por la carrera. Al llegar a mi ultimo año elegi seguir el camino de desarrollo de software complementando lo ya visto en la carrera con nuevos lenguajes, por esto entre a un programa de capacitaciónnacional de desarrollo web y tambien elegir materias electivas relacionadas con la programación. Me considero alguien muy autoexigente y competitivo, esto me lleva a cada dia superarme más como profesional y pulir mis habilidades.';
    this.activo = 'none';
  }

  editar() {
    this.activo = 'block';
  }

  cerrarTextArea(){
    this.activo='none';
  }
}
