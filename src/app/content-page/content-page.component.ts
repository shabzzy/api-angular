import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

    news:any =[]

    constructor(private http: HttpClient) {}
    title = 'api-angular';
    ngOnInit() {

      let header = new HttpHeaders({
        'X-RapidAPI-Key': '2de9b79067msh5301ef1f2b8c07dp17c00fjsn1c56d532cd34',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'

      });
      this.http
        .get<any>('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0', {
          headers: header
        })

        //looping through the data with for each
        .subscribe(element => {
          element.news.forEach((element: any) => {
            this.news.push(element);
            console.log(this.news);

          });
        })
        
}}
