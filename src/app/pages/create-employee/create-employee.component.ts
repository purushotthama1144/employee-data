import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  firstName:any;
  lastName:any;
  emailId:any;

  submitted = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }



  save() {

    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.firstName, this.lastName, this.emailId)
    this.save();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
} {

}
