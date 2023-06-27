import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  
  employeeId:any;
  employeeDetail:any;

  constructor(private route: ActivatedRoute,private router: Router , private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get('id')
    this.getEmployeeDetails()
  }

  getEmployeeDetails() {
    this.employeeService.employeeDetails(this.employeeId).subscribe((res)=> {
      if(res){
        this.employeeDetail = res;
      }
    })
  }

  list(){
    this.router.navigate(['employees']);
  }
}