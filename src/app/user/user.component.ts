import {Component, computed, Input, input} from '@angular/core';
import {User} from "../dummy-users";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user= input.required<User>();
  imageSrcPath = computed(()=> { return 'assets/users/' + this.user().avatar;})


  onSelectUser() {
  }
}
