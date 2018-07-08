import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import {Observable}  from 'rxjs';
import {catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
   
  public  jsdata;
  public Url ='https://jsonplaceholder.typicode.com/todos';
  constructor(public http:HttpClient) { }
  
  public getdata():any{
     let response = this.http.get(this.Url)
     console.log(response)
     return response;
  }
}
