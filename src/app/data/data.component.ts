import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  searchTerm = '';
  term = '';
  	// Implementing OnInit
    posts:any =[]
    news:any =[]

    constructor(private http: HttpClient) {}
    title = 'api-angular';
    ngOnInit() {
      // API Call
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '2de9b79067msh5301ef1f2b8c07dp17c00fjsn1c56d532cd34',
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    });
    this.http
      .get<any>('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', {
        headers: headers
      })
      .subscribe((response: any) => {
        this.posts = response;


        console.log(this.posts);
      });

}}
