import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {
  nameList: any;

  constructor(private http:HttpClient, private formBuilder:FormBuilder, private router:Router ) {}
  ngOnInit(): void {
    this.getStudentName()
  }
  studentMarks = this.formBuilder.group({
    studentName : ["",Validators.required],
    maths : ["",Validators.required],
    science : ["",Validators.required],
    social : ["",Validators.required]

  })
registerMarks(){
  this.http.post("http://localhost:3000/marks",this.studentMarks.value).subscribe()
  this.studentMarks.reset()
  this.router.navigate(['/marklist'])
  
}
getStudentName(){
  this.http.get("http://localhost:3000/posts").subscribe((result) => {
    this.nameList = result;
  } )
}

}
