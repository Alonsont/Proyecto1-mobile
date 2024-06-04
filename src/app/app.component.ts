import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from './auth.service';  

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private showMenuPages = ['/home', '/settings', '/servicios-streaming'];
  userName: string | null = null;

  constructor(private router: Router, private menu: MenuController, private authService: AuthService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeMenu();
        this.userName = this.authService.getUserName(); 
      }
    });
  }

  showMenu(): boolean {
    return this.showMenuPages.includes(this.router.url);
  }

  closeMenu() {
    this.menu.close();
  }

  logout() {
    this.authService.logout();
    this.menu.close();
    this.router.navigate(['/login']);
  }
}

