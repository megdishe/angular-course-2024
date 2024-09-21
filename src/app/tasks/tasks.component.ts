import {Component, input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {CreateTaskComponent} from "./create-task/create-task.component";
import {TasksService} from "./tasks.service";
import {map, Subscription} from "rxjs";
import {Task} from "./task/task.model";


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    CreateTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnDestroy, OnChanges {
  userId = input.required<string>();
  username = input<string>();
  subscription!: Subscription;
  protected selectedUserTasks: Task[] = [];
  protected editMode = false;

  constructor(private tasksService: TasksService) {
  }

  onAddTask() {
    this.editMode = true;
  }

  quitEditMode() {
    this.editMode = false;
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.tasksService.tasksSubject
      .pipe(
        map(tasks => tasks.filter(task => task.userId === this.userId()))
      )
      .subscribe(value => this.selectedUserTasks = value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
