import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userName: string | null = null;
  private users: { email: string, password: string, name: string }[] = [];

  constructor(private router: Router) { }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.userName = user.name;
      return true;
    } else {
      return false;
    }
  }

  signup(email: string, password: string, name: string): boolean {
    const userExists = this.users.some(u => u.email === email);
    if (userExists) {
      return false;
    } else {
      this.users.push({ email, password, name });
      this.userName = name;
      return true;
    }
  }

  logout() {
    this.userName = null;
  }

  getUserName(): string | null {
    return this.userName;
  }
}


