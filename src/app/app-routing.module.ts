import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentPageComponent } from './content-page/content-page.component';
import { CovidComponent } from './covid/covid.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { USComponent } from './us/us.component';
import { WeatherComponent } from './weather/weather.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'covid',component:CovidComponent},
  {path:'us',component:USComponent},
  {path:'data', component:DataComponent},
  {path:'covid/content' , component:ContentPageComponent},
  {path:'world',component:WorldComponent},
  {path:'weather',component:WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
