import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { EmployeeService } from 'src/app/service/employee.service';
import { SetemployeedataService } from 'src/app/service/setemployeedata.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements CanComponentDeactivate ,OnInit {
  firstName: any;
  lastName: any;
  emailId: any;
  id:any;

  submitted = false;
  employeeId:any;

  constructor(private route: ActivatedRoute, private router: Router,
    private employeeService: EmployeeService, private setemployeedataService: SetemployeedataService) { }

  ngOnInit() {
    this.firstName = this.setemployeedataService.employeeFirstName;
    this.lastName = this.setemployeedataService.employeeLastName;
    this.emailId = this.setemployeedataService.employeeEmailid;
    this.employeeId = this.route.snapshot.paramMap.get('id');

  }

  updateEmployee() {
    const payload = {
      "id":this.id,
      "employeeFirstName":this.firstName,
      "employeeLastName":this.lastName,
      "employeeEmailId":this.emailId
    }
    if((this.firstName != null) && (this.lastName != null) && (this.emailId != null)) {
      this.employeeService.updateEmployee(this.employeeId , payload).subscribe((response)=> {
        this.submitted = true;
        this.gotoList();
      })
    }
  }

  onSubmit(updateForm:any) {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if((this.firstName != null || this.firstName != "") && (this.lastName != null || this.lastName != "") && (this.emailId != null || this.emailId != ""))  {
      return confirm('Are you sure you want to leave this page without saving the form?');
      
    }
    return true;
  }

}
