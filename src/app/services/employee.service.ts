import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Globals } from '.././globals';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient, private globals: Globals, private router: Router) { }

  InsertEmployee(employeeEntity) {
    
  
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


  getId(employeeEntity){
   
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.globals.baseAPIUrl + 'Employee/update_data', employeeEntity)
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
  }
  
  getemployee() {
    
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.globals.baseAPIUrl + 'employee/list_employee')
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

  fetchEmpolyee(id){

    
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.globals.baseAPIUrl + 'employee/update?id=' + id)
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

isActiveChange(changeEntity) {
  let promise = new Promise((resolve, reject) => {
    this.http.post(this.globals.baseAPIUrl + 'employee/isActiveChange', changeEntity)
      .toPromise()
      .then(
        res => { // Success
          resolve(res);
        },
        msg => { // Error
          reject(msg);
          //   this.globals.isLoading = false;
          //this.router.navigate(['/pagenotfound']);      
        }
      );
  });
  return promise;
}

deleteEmployee(del) {
  
  let promise = new Promise((resolve, reject) => {
    this.http.get(this.globals.baseAPIUrl + 'employee/delete?id=' + del)
      .toPromise()
      .then(
        res => { // Success
          resolve(res);
        },
        msg => { // Error
          reject(msg);
          //  this.globals.isLoading = false;
          this.router.navigate(['/pagenotfound']);
        }
      );
  });
  return promise;
}
}


