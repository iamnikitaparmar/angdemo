import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../services/task.service';
import { Globals } from '../globals';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList;

  constructor(public http: HttpClient, private TaskService: TaskService, public globals: Globals, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    debugger

    this.TaskService.getTask()
      .then((data) => {
        this.taskList = data;
        console.log(this.taskList);
      },
        (error) => {
          //alert('error');
        });
  }

}
