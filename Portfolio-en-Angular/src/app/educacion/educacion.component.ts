import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion';
import { SEducacionService } from '../service/s-educacion.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  edu: Educacion[] = [];

  constructor(private sEducacion: SEducacionService, private tokenService: TokenService) { }
  
  isLogged= false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged=false;
    }
  }

  cargarEducacion():void{
    this.sEducacion.lista().subscribe(
      data => {this.edu=data;}
    )
  }

  delete(id?:number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(data=>{
        this.cargarEducacion();
      },err=>{
        alert("No se pudo borrar educacion");
      })
    }
  }


}
