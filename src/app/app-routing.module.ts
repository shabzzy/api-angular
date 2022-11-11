import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentPageComponent } from './content-page/content-page.component';
import { CovidComponent } from './covid/covid.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { USComponent } from './us/us.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'covid',component:CovidComponent},
  {path:'us',component:USComponent},
  {path:'data', component:DataComponent},
  {path:'covid/content' , component:ContentPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
