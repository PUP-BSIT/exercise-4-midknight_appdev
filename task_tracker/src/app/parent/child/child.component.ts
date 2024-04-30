import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from '../../../model/task.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() task:Task;

}
