import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Globals } from '../globals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskData;
  taskEntity;
  submitted;
  header;
  button;

  constructor(private router: Router, private TaskService: TaskService, public globals: Globals, private route: ActivatedRoute) { }

  ngOnInit() {

    debugger
    this.taskEntity = {};
    this.header = 'Add';
    this.button = 'Add';

    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.header = 'Edit';
      this.button = 'Edit';
     
      this.TaskService.fetchTask(id)
        .then((data) => {
          this.taskEntity = data;
          console.log(this.taskEntity);
        },
          (error) => {
            //alert('error');
          });
    }

  }

  Inserttask(taskForm) {
    debugger

    if (taskForm.valid) {
      this.TaskService.Inserttask(this.taskEntity)
      .then((data) => {
        this.taskData = data;
        console.log(this.taskData);
        this.router.navigate(['/task/list']);
      },
        (error) => {
          //alert('error');
        });
    } else {
    }
  }

}
