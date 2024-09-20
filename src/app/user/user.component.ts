import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../dummy-users";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //user= input.required<User>();
  //imageSrcPath = computed(()=> { return 'assets/users/' + this.user().avatar;})
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter<string>();


  get imageSrcPath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
