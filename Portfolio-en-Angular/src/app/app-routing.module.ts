import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditexperienciaComponent } from './experiencia/editexperiencia.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:'portfolio',component: PortfolioComponent},
  {path:'login', component:LoginComponent},
  {path:'',redirectTo:'portfolio',pathMatch:'full'},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditexperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
