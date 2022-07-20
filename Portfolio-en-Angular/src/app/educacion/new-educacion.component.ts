import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from '../model/educacion';
import { SEducacionService } from '../service/s-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
  export class NewEducacionComponent implements OnInit {
  nombreEd: string = '';
  fechaEd: string = '';
  descripcionEd: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onCreate(): void {
    const edu = new Educacion(this.nombreEd,this.fechaEd,this.descripcionEd);
    this.sEducacion.save(edu).subscribe(data=>{
      alert("Educacion creada");
      this.router.navigate(['']);
    },err=>{
      alert("Fallo");
      this.router.navigate(['']);
    })
  }
}
