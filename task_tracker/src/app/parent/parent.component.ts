import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  tasks: Task[] = [];

  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: new Date(),
  };
  selectedTask: Task | null = null;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(): void {
    this.taskService.addTask(this.newTask);
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  clearForm(): void {
    this.newTask = {
      id: 0,
      title: '',
      description: '',
      dueDate: new Date(),
    };
  }
}
