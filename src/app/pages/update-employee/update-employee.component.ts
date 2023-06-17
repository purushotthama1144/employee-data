import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { SetemployeedataService } from 'src/app/service/setemployeedata.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  firstName: any;
  lastName: any;
  emailId: any;
  id:any;

  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private employeeService: EmployeeService, private setemployeedataService: SetemployeedataService) { }

  ngOnInit() {
    this.firstName = this.setemployeedataService.employeeFirstName;
    this.lastName = this.setemployeedataService.employeeLastName;
    this.emailId = this.setemployeedataService.employeeEmailid;
    this.id = this.setemployeedataService.id;
  }

  updateEmployee() {
    const payload = {
      "id":this.id,
      "employeeFirstName":this.firstName,
      "employeeLastName":this.lastName,
      "employeeEmailId":this.emailId
    }
    if((this.firstName != null) && (this.lastName != null) && (this.emailId != null)) {
      this.employeeService.updateEmployee(payload).subscribe((response)=> {
        this.submitted = true;
        console.log(response)
        this.gotoList();
      })
    }
    // this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
