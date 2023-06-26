import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordService } from '../record.service';
import { Record } from '../record';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  datas: any;
  id : any;
  studentName: any;
  maths: any;
  science: any;
  social: any;
  posts: Record[] = [];
  record = new Record();

  constructor(private http:HttpClient, private router:Router, private activatedRoute:ActivatedRoute,
    private service:RecordService){}
  ngOnInit(): void {
    this.getStudentData()
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get("http://localhost:3000/marks/" + this.id).subscribe((result:any) => {
      
      this.record.studentName = result.studentName;
      this.record.maths = result.maths;
      this.record.science = result.science;
      this.record.social = result.social;
    })
  }

  getStudentData(){
    //let patchURL = "http://localhost:3000/marks"
    this.http.get("http://localhost:3000/marks").subscribe((result) => {
      this.datas = result
    })
  }
  editMarks(){
     this.service.updateMarks(this.id,this.record);
     this.router.navigate(['/marklist']);
  }
  // marks(){
  //    this.service.updateMarks(this.id)
  //  }
}
