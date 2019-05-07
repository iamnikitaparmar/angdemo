import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Globals } from '.././globals';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient, private globals: Globals, private router: Router) { }

  Insertproject(projectEntity) {
    debugger
  
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.globals.baseAPIUrl + 'Project/insert_data', projectEntity)
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

  getId(projectEntity){
   
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.globals.baseAPIUrl + 'Project/update_data', projectEntity)
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

  getproject() {
    debugger
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.globals.baseAPIUrl + 'project/list_project')
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

  fetchProject(id){

    debugger
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.globals.baseAPIUrl + 'project/update?id=' + id)
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

deleteProject(del) {
  debugger
  let promise = new Promise((resolve, reject) => {
    this.http.get(this.globals.baseAPIUrl + 'project/delete?id=' + del)
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
