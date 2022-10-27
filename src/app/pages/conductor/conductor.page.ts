import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  handlerMessage='';
  roleMessage='';


  constructor(private alertController: AlertController, 
    private navController: NavController,
    private menuController: MenuController) { }

  ngOnInit() {
   
  }
  async Disponibilidad() {
    const alert = await this.alertController.create({
      header: 'Disponibilidad',
      message: 'Visible',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async logout() {
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('login');
    }


}