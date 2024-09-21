import {Component, computed, input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {DUMMY_TASKS} from "./dummy.tasks";


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  userId = input<string>();
  username = input<string>();
  tasks = DUMMY_TASKS


  get selectedUserTasks() {
    return this.tasks.filter(value => value.userId === this.userId());
  }

  onTaskCompleted(taskId: string) {
    this.tasks = this.tasks.filter(value => value.id !== taskId);
  }

}
