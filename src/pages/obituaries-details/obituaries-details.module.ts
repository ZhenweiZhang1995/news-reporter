import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObituariesDetailsPage } from './obituaries-details';

@NgModule({
  declarations: [
    ObituariesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ObituariesDetailsPage),
  ],
})
export class ObituariesDetailsPageModule {}
