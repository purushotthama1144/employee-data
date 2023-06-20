import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { SetemployeedataService } from 'src/app/service/setemployeedata.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService, private setemployeedataService: SetemployeedataService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployeeeList()
  }

  getEmployeeeList() {
    this.employeeService.fetchEmployeeList().subscribe((res) => {
      console.log(res)
      this.employees = res;
      this.setemployeedataService.employeeList = this.employees;
    })
  }

  deleteEmployee(id: any) {
    console.log(id)
    this.employeeService.deleteEmployee(id).subscribe((del) => {
      console.log(del)
    })
  }

  employeeDetails(id: any) {

  }

  updateEmployee(employee: any) {
    if (employee != null) {
      this.setemployeedataService.employeeFirstName = employee.employeeFirstName;
      this.setemployeedataService.employeeLastName = employee.employeeLastName;
      this.setemployeedataService.employeeEmailid = employee.employeeEmailId;
      this.setemployeedataService.id = employee.id
      this.router.navigate(['/', 'update'])
    }
  }
}
