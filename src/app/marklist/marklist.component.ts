import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-marklist',
  templateUrl: './marklist.component.html',
  styleUrls: ['./marklist.component.css']
})
export class MarklistComponent implements OnInit {
  displayedColumns : string[] = ['studentName','maths','science','social','edit','delete']
  datas: any;

constructor(private http:HttpClient, private router:Router){}
  ngOnInit(): void {
    this.getStudentData()
  }
getStudentData(){
  //let patchURL = "http://localhost:3000/marks"
  this.http.get("http://localhost:3000/marks").subscribe((result) => {
    this.datas = result
  })
}

}
