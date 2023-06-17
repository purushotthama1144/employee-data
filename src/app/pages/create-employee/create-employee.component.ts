import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

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

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {

  }

  save() {
    const payload = {
      "id":"",
      "employeeFirstName":this.firstName,
      "employeeLastName":this.lastName,
      "employeeEmailId":this.emailId
    }
    if((this.firstName != null) && (this.lastName != null) && (this.emailId != null)) {
      this.employeeService.addEmployee(payload).subscribe((response)=> {
        this.submitted = true;
        console.log(response)
        this.gotoList();
      })
    }
  }

  onSubmit() {
    this.save();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
} 