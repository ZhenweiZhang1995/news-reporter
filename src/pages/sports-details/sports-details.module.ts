import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportsDetailsPage } from './sports-details';

@NgModule({
  declarations: [
    SportsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SportsDetailsPage),
  ],
})
export class SportsDetailsPageModule {}
