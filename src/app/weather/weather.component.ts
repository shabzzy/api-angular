import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {

  forecasts: any = [];

  constructor(private http: HttpClient) {}
  title = 'api-angular';
  ngOnInit() {
    // API Call
    let header = new HttpHeaders({
      'X-RapidAPI-Key': '2de9b79067msh5301ef1f2b8c07dp17c00fjsn1c56d532cd34',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    });
    this.http
      .get<any>(
        'https://weatherapi-com.p.rapidapi.com/current.json',{
        params: {q: '<REQUIRED>'},
        headers: header
      })
      .subscribe((element:any) => {
        element.forecast.forEach((element: any) => {
          this.forecasts.push(element);
          console.log(this.forecasts);

        });

    //solving the cors error when calling the api
      })
   } }
