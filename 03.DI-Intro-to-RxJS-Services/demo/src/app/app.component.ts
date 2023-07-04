import { Component } from '@angular/core';
import { User } from './types/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  users: User[] = [
    {name: 'Ivan', age: 20},
    {name: 'Mitko', age: 22},
    {name: 'Pesho', age: 23},
    {name: 'Penka', age: 24},
  ];

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value),
    };
    this.users.push(user);

    inputName.value = "";
    inputAge.value = "";
  }
}
