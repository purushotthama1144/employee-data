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
      this.employees = res;
      this.setemployeedataService.employeeList = this.employees;
    })
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe((del) => {
      if(del){
        this.router.navigate(['/' , 'employees'])
      }
    })
  }

  employeeDetails(id: any) {
    if (id != null) {
      this.router.navigate(['/details' , id])
    }
    
  }

  updateEmployee(employee: any) {
    if (employee != null) {
      this.setemployeedataService.employeeFirstName = employee.employeeFirstName;
      this.setemployeedataService.employeeLastName = employee.employeeLastName;
      this.setemployeedataService.employeeEmailid = employee.employeeEmailId;
      this.setemployeedataService.id = employee.id
      this.router.navigate(['/', 'update' , employee.id])
    }
  }
}
