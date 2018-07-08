import { Component, OnInit } from '@angular/core';
import {HttpService}  from './../http.service'
import {Observable }  from 'rxjs'
import {catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.css']
})
export class HomeviewComponent implements OnInit {

  public jsondata;
  public  checked;
  constructor(public httpservice :HttpService) {
    
   }

  ngOnInit() {
    this.jsondata = this.httpservice.getdata().subscribe(
      data=>{
         console.log(data)
         this.jsondata = data;
        

      },
      error=>{
        console.log("some error occured")
        console.log(error.errorMessage);
      }
    )
  }

  

}
