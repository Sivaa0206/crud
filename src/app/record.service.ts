import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Record } from './record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http:HttpClient) { }
  updateMarks(id:any,value:Record){
    this.http.put("http://localhost:3000/marks/" + id,value ).subscribe();
  }
  deleteStudentMarks(id:any){
    const url = "http://localhost:3000/marks/"
    this.http.delete(url + id).subscribe();
  }

}
