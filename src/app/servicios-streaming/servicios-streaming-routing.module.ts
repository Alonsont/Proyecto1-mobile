import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosStreamingPage } from './servicios-streaming.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosStreamingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosStreamingPageRoutingModule {}
