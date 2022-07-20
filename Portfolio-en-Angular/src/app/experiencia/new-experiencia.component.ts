import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../model/experiencia';
import { SExperienciaService } from '../service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string="";
  fechaE: string="";
  descripcionE: string="";

  constructor(private sExperiencia: SExperienciaService, private router : Router) { }

  ngOnInit(): void {
  }
  
  onCreate():void {
    const expe= new Experiencia(this.nombreE, this.descripcionE, this.fechaE);
    this.sExperiencia.save(expe).subscribe(data=>{
      alert("Experiencia creada");
      this.router.navigate(['']);
    }, err=>{
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }
}
