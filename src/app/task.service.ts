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

  addTask(task: Task): void {
    const currentTasks = this.tasksSubject.getValue();
    this.tasksSubject.next([...currentTasks, task]);
  }

  editTask(updatedTask: Task): void {
    const currentTasks = this.tasksSubject.getValue();
    const updatedTasks = currentTasks.map((task) => {
      if (task.id === updatedTask.id) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
    this.tasksSubject.next(updatedTasks);
  }

  deleteTask(task: Task): void {
    const currentTasks = this.tasksSubject.getValue();
    const updatedTasks = currentTasks.filter(t => t !== task);
    this.tasksSubject.next(updatedTasks);
  }

  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }
}
