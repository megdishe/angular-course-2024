import {Component, computed, signal} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {NgForOf} from "@angular/common";
import {DUMMY_USERS} from "./dummy-users";
import {TaskComponent} from "./task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    NgForOf,
    TaskComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedUsername?: string;
  protected readonly users = DUMMY_USERS;

  onSelectedUser(id: string) {
    let selectedUser = this.users.find(value => value.id == id);
    this.selectedUsername = selectedUser?.name;
  }
}
