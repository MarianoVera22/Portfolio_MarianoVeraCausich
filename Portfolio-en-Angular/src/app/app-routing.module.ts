import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './educacion/edit-educacion.component';
import { NewEducacionComponent } from './educacion/new-educacion.component';
import { EditexperienciaComponent } from './experiencia/editexperiencia.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:'portfolio',component: PortfolioComponent},
  {path:'login', component:LoginComponent},
  {path:'',redirectTo:'portfolio',pathMatch:'full'},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditexperienciaComponent},
  {path:'nuevaedu', component: NewEducacionComponent},
  {path:'editedu/:id', component: EditEducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
