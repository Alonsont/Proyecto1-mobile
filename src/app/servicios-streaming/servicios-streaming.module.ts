import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosStreamingPageRoutingModule } from './servicios-streaming-routing.module';

import { ServiciosStreamingPage } from './servicios-streaming.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosStreamingPageRoutingModule
  ],
  declarations: [ServiciosStreamingPage]
})
export class ServiciosStreamingPageModule {}
