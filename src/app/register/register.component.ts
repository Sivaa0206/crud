import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private formBuilder:FormBuilder, private http:HttpClient,private route:Router){}
studentForm = this.formBuilder.group({
  studentName : ["",[Validators.required,Validators.pattern('[a-zA-Z@$,./s]+')]],
  dob : ["",[Validators.required]],
  gender : [""],
  course : [""]
})
registerStudent(){
  this.http.post("http://localhost:3000/posts",this.studentForm.value).subscribe()
  this.studentForm.reset()
  this.route.navigate(['/marks'])
}
}
