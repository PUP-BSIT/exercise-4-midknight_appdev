import { Component, Input } from '@angular/core';
import { Task } from '../../../model/task.model';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input () task: Task;
  constructor () {
    this.task = {id: 0, title:"", description:"", dueDate: new Date}
  }
}
