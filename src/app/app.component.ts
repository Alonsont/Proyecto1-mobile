import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private showMenuPages = ['/home', '/settings', '/servicios-streaming'];

  constructor(private router: Router, private menu: MenuController) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeMenu();
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
    this.menu.close();
    this.router.navigate(['/login']);
  }
}
