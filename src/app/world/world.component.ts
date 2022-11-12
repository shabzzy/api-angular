    import { Component, OnInit } from '@angular/core';
    import {HttpClient, HttpHeaders} from '@angular/common/http';
    @Component({
      selector: 'app-world',
      templateUrl: './world.component.html',
      styleUrls: ['./world.component.css']
    })
    export class WorldComponent implements OnInit {

      posts:any =[]
      news:any =[]

      constructor(private http: HttpClient) {}
      title = 'api-angular';
      ngOnInit() {
        // API Call
      let headers = new HttpHeaders({
        'api-Key': 'jU5laZzhByndXCAIUpr3s5qIVwgYP0xd',

      });
      this.http
        .get<any>('https://api.apilayer.com/world_news/extract-news',{headers: {'Access-Control-Allow-Origin' : '*'}}
        )
        .subscribe((response: any) => {
          this.posts = response;


          console.log(this.posts);
        });
    //solving the cors error when calling the api


    }}
