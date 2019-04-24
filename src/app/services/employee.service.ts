import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee';

import { Router } from '@angular/router';
import { Globals } from '.././globals';
//import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //private _url: string = "http://localhost/angdemo/api/employee";

  constructor(private http: HttpClient, private globals: Globals, private router: Router) { }

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
            reject(msg.json());

            this.router.navigate(['/pagenotfound']);
          }
        );
    });
    return promise;
  }
}

