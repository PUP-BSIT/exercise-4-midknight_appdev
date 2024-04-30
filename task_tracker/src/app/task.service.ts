import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  constructor() {
    this.initializeTasks();
  }

  private initializeTasks(): void {
    const initialTasks: Task[] = [
      {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        dueDate: new Date(),
      },
      {
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        dueDate: new Date(),
      },
      {
        id: 3,
        title: 'Task 3',
        description: 'Description 3',
        dueDate: new Date(),
      },
    ];

    this.tasksSubject.next(initialTasks);
  }

  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }
}
