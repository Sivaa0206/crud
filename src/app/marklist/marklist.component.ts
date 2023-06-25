import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordService } from '../record.service';


@Component({
  selector: 'app-marklist',
  templateUrl: './marklist.component.html',
  styleUrls: ['./marklist.component.css']
})
export class MarklistComponent implements OnInit {
  displayedColumns : string[] = ['studentName','maths','science','social','status','edit','delete']
  datas: any;
  statusId:any;
  markStatus: any;
  currentId: any;
  currentPerson: any;

 

constructor(private http:HttpClient, private router:Router, private service:RecordService){}
  ngOnInit(): void {
    this.getStudentData()
    this.status()

  }
getStudentData(){
  //let patchURL = "http://localhost:3000/marks"
  this.currentId =this.statusId
  this.http.get("http://localhost:3000/marks").subscribe((result) => {
    this.datas = result;

  
    


  })
 
}


deleteStudent(id:any){
  
  this.service.deleteStudentMarks(id)
  
  
}
status(){
  console.log(this.statusId);
 

  this.http.get("http://localhost:3000/marks").subscribe((result) => {
      
      this.markStatus = result;

      
      console.log(this.markStatus);
     
      
    })
  }

}

