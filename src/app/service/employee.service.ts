import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  baseUrl = `http://localhost:8080`

  constructor(private http: HttpClient) { }

  fetchEmployeeList():Observable<any> {
    return this.http.get(this.baseUrl + '/employeeList')
  }

  addEmployee(payload:any):Observable<any> {
    return this.http.post(this.baseUrl + '/addEmployee' , payload)
  }

  updateEmployee(payload:any):Observable<any> {
    return this.http.post(this.baseUrl + '/updateEmployee' , payload)
  
  }
  deleteEmployee(id:any):Observable<any> {
    return this.http.delete(this.baseUrl + '/deleteEmployee' + '/' + id)
  }


}
