import {Injectable} from "@angular/core";
import {DUMMY_TASKS} from "./dummy.tasks";
import {Task} from "./task/task.model";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks: Task[] = []
  tasksSubject = new BehaviorSubject(this.tasks);

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    } else {
      this.tasks = DUMMY_TASKS;
    }
    this.tasksSubject.next(this.tasks);
  }


  addUserTask(task: Task) {
    this.tasks = [...this.tasks, task];
    this.tasksSubject.next(this.tasks);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteUserTask(id: string) {
    this.tasks = this.tasks.filter(value => value.id !== id)
    this.tasksSubject.next(this.tasks);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
