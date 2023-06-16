import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit{
  employees: any[] = [];

  constructor(private employeeService:EmployeeService){}

  ngOnInit(): void {
    this.getEmployeeeList()
  }

  getEmployeeeList() {
    this.employeeService.fetchEmployeeList().subscribe((res) => {
      console.log(res)
      this.employees = res;
    })
  }

  deleteEmployee(id:any) {
    console.log(id)
  }

  employeeDetails(id:any){
    
  }

  updateEmployee() {
    
  }
}
