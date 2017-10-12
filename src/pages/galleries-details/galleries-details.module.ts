import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleriesDetailsPage } from './galleries-details';

@NgModule({
  declarations: [
    GalleriesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleriesDetailsPage),
  ],
})
export class GalleriesDetailsPageModule {}
