import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Globals } from '.././globals';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient, private globals: Globals, private router: Router) { }

  Inserttask(taskEntity) {
    debugger
  
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.globals.baseAPIUrl + 'Task/insert_data', taskEntity)
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

  getId(taskEntity){
   
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.globals.baseAPIUrl + 'Task/update_data', taskEntity)
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

  getTask() {
    debugger
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.globals.baseAPIUrl + 'task/list_task')
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

  getselectedTask() {
    debugger
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.globals.baseAPIUrl + 'task/selectlist')
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

  fetchTask(id){

    debugger
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.globals.baseAPIUrl + 'task/update?id=' + id)
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


deleteTask(del) {
  debugger
  let promise = new Promise((resolve, reject) => {
    this.http.get(this.globals.baseAPIUrl + 'task/delete?id=' + del)
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
