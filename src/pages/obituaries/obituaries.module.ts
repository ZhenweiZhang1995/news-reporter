import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObituariesPage } from './obituaries';

@NgModule({
  declarations: [
    ObituariesPage,
  ],
  imports: [
    IonicPageModule.forChild(ObituariesPage),
  ],
})
export class ObituariesPageModule {}
