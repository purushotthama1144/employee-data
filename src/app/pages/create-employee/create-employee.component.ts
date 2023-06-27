import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { SetemployeedataService } from 'src/app/service/setemployeedata.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  firstName: string = "";
  lastName: string = "";
  emailId: string = "";
  submitted = false;
  employeeEmailId: any;
  employeeList: any[] = [];

  constructor(private router: Router, private employeeService: EmployeeService, private setemployeedataService: SetemployeedataService) { }

  ngOnInit() {
    this.employeeList = this.setemployeedataService.employeeList
    this.employeeEmailId = this.employeeList.filter((val) => val.employeeEmailId)
  }

  save() {
    if ((this.firstName != "") && (this.lastName != "") && (this.emailId != "")) {
      this.employeeEmailId = this.employeeList.find((val) => val.employeeEmailId == this.emailId)
      if (!this.employeeEmailId) {
        const payload = {
          "id": "",
          "employeeFirstName": this.firstName,
          "employeeLastName": this.lastName,
          "employeeEmailId": this.emailId
        }

        this.employeeService.addEmployee(payload).subscribe((response) => {
          this.submitted = true;
          this.gotoList();
        })

      } else {
        alert("data exists")
      }
    } else {
      alert("please fill the details")

    }
  }

  onSubmit() {
    this.save();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
} 