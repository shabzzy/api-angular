    import { Component, OnInit } from '@angular/core';
    import {HttpClient, HttpHeaders} from '@angular/common/http';
    @Component({
      selector: 'app-world',
      templateUrl: './world.component.html',
      styleUrls: ['./world.component.css']
    })
    export class WorldComponent implements OnInit {

      randomNews: any = [];

  constructor(private http: HttpClient) {}
  title = 'api-angular';
  ngOnInit() {
    // API Call
    let header = new HttpHeaders({
      'X-RapidAPI-Key': '2de9b79067msh5301ef1f2b8c07dp17c00fjsn1c56d532cd34',
		'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
    });
    this.http
      .get<any>(
        'https://news-api14.p.rapidapi.com/top-headlines?country=us&language=en&pageSize=10&category=sports',{
        headers: header
      })
      .subscribe((element) => {
        element.articles.forEach((element: any) => {
          this.randomNews.push(element);
          console.log(this.randomNews);
        });
      });
    //solving the cors error when calling the api
  }
}
