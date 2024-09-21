import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {NgForOf} from "@angular/common";
import {DUMMY_USERS} from "./dummy-users";
import {TasksComponent} from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    NgForOf,
    TasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedUsername!: string;
  selectedUserId!: string;
  protected readonly users = DUMMY_USERS;

  onSelectedUser(id: string) {
    let selectedUser = this.users.find(value => value.id == id);
    this.selectedUserId = selectedUser!.id;
    this.selectedUsername = selectedUser!.name;
  }
}
