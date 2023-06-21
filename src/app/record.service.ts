import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Record } from './record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http:HttpClient) { }
  updateMarks(value:Record,id:any){
    this.http.put("http://localhost:3000/marks/" + id,value )
  }

}
