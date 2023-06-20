import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetemployeedataService {
  employeeFirstName = "";
  employeeLastName = "";
  employeeEmailid = "";
  id:any;

  employeeList:any[] = [];
}
