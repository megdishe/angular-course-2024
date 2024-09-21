import {Component, inject, input, output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  userId = input.required<string>();
  close = output<void>()
  private tasksService = inject(TasksService);
  protected enteredTitle = '';
  protected enteredSummary = '';
  protected enteredDate = '';


  onCancel() {
    this.close.emit()
  }

  protected readonly onsubmit = onsubmit;

  onSubmit() {
    const task = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
      userId: this.userId(),
      id: new Date().toTimeString()
    };
    this.tasksService.addUserTask(task);
    this.close.emit();
  }
}
