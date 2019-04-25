import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { IEmployee } from '../employee';

import { Router } from '@angular/router';
import { Globals } from '.././globals';
//import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient, private globals: Globals, private router: Router ) { }

  InsertEmployee(employeeEntity) {
    debugger
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.globals.baseAPIUrl + 'Employee/insert_data', employeeEntity)
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
          },
          msg => { // Error
            reject(msg);
            
          }
        );
    });
    return promise;
  }

  getemployee() {
    debugger
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.globals.baseAPIUrl + 'employee/Index')
        .toPromise()
        .then(
          res => { // Success 
            resolve(res);
          },
          msg => { // Error
            reject(msg);

            this.router.navigate(['/pagenotfound']);
          }
        );
    });
    return promise;
  }
}

