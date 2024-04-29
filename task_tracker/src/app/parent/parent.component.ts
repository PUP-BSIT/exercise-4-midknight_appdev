import { Component } from '@angular/core';
import { Task } from '../../model/task.model';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  task: Task [] = [
    {
      id: 1,
      title: "Title 1",
      description: "description 1",
      dueDate: new Date(2024,4,29),
    },
    {
      id: 2,
      title: "Title 2",
      description: "description 2",
      dueDate: new Date(2024,4,29),
    },
    {
      id: 3,
      title: "Title 3",
      description: "description 3",
      dueDate: new Date(2024,4,29),
    },
  ]

}
