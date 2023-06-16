import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  firstName:any = "purush";
  lastName:any = "B V";
  emailId:any = "bvp@gmail.com";

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    

  }

  list(){
    this.router.navigate(['employees']);
  }
}