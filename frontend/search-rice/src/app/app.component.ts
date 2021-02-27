import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'search-rice';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    })
  };

  constructor(private http: HttpClient){

  }

  clickBtn(){
    const aaa = 'aaa'
    console.log(aaa);
    this.http.get('http://localhost:8080/',this.httpOptions).subscribe((data)=>{
      console.log(data);
      
    })
  }

}
