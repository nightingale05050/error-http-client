import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tesssst';
  posts: Array<{name: string}> = [];
  constructor(private http: HttpClient){

  }

  ngOnInit() {
    this.http.get<Array<{name: string}>>('/assets/posts.json').subscribe(posts=>{
      this.posts = posts;
    })

  }


}
