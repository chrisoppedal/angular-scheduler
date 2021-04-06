import {Injectable} from '@angular/core';

interface User {
  first: string;
  last: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  constructor() {}

  users: User[] = [];
  events: Event[] = [];

  addUser = (user: User) => {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
