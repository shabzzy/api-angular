import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { CovidComponent } from './covid/covid.component';
import { AppRoutingModule } from './app-routing.module';
import { USComponent } from './us/us.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataComponent } from './data/data.component';
import { ContentPageComponent } from './content-page/content-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CovidComponent,
    USComponent,
    HomeComponent,
    DataComponent,
    ContentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
