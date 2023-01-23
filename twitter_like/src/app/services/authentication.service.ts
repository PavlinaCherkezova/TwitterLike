import { Injectable } from '@angular/core';
import { User, UserCredentials } from '../models/user';
import * as uuid from "uuid";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private users: User[] = [];
  public loggedUser: User | undefined;

  constructor() {
    let users = localStorage.getItem('users');
    this.users = users && JSON.parse(users) || [];
    this.loggedUser = this.users?.find((user) => user.isLoggedIn);
  }

  public register(userCredentials: UserCredentials) {
    this.users.push({ id: uuid.v4(), isLoggedIn: true, avatar: 'src/assets/user.png', nickname: `@${userCredentials.username}`, credentials: userCredentials });
    localStorage.setItem('users', JSON.stringify(this.users));
    this.loggedUser = this.users[this.users.length - 1];
  }

  public login(userCredentials: UserCredentials): boolean {
    this.loggedUser = this.users.find((user) => user.credentials.username == userCredentials.username && user.credentials.password == userCredentials.password);
    
    if(this.loggedUser){
      this.loggedUser.isLoggedIn = true;
      localStorage.setItem('users', JSON.stringify(this.users));
    }
    
    return !!this.loggedUser;
  }

  public logOut(): void {
    let user = this.users.find((user) => user.credentials.username == this.loggedUser?.credentials.username && user.credentials.password == this.loggedUser?.credentials.password);
    if(user){
      user.isLoggedIn = false;
    }

    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
