import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LimericksPage } from './limericks';

@NgModule({
  declarations: [
    LimericksPage,
  ],
  imports: [
    IonicPageModule.forChild(LimericksPage),
  ],
})
export class LimericksPageModule {}
