import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public database!: SQLiteObject;



  constructor(private router: Router, private sqlite: SQLite, private toastController: ToastController) {
    this.initDatabase();
  }


  private initDatabase() {
    this.sqlite.create({
      name: 'bd1.db',
      location: 'default',
    }).then((database: SQLiteObject) => {
      this.database = database;
      this.createTables();
    })

  }

    async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  private createTables() {
    this.database.executeSql('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, user Text, nombre Text, password Text, mail Text)', [])
      .then(() => this.presentToast('tabla creada'))
      .catch(error => this.presentToast('Error al crear tabla' + error));

  }

  crearUsuario(user: string, nombre: string, password: string, mail: string) {
    return this.database.executeSql('INSERT or IGNORE into usuarios (user, nombre, password, mail) VALUES (?,?,?,?)',
      [user, nombre, password, mail]).then(() => this.presentToast('Usuario creado con exito'))
      .catch(error => this.presentToast('Error al crear usuario' + error));
  }

  validarUsuario(user: string, password: string) {
    return this.database.executeSql('SELECT * from usuarios WHERE user = ? AND password = ?', [user, password]).then((res) => {
      if (res.rows.lenght > 0) {
        return res.rows.item(0);
      } else {
        return null;
      }
    }).catch(error => this.presentToast('Error en las credenciales' + error));

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.presentToast('Sesión cerrada correctamente.');
  }
}

