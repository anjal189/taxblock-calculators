import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidentialstatusComponent } from './residentialstatus/residentialstatus.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'residentialstatus',component: ResidentialstatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
