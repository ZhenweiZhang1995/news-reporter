import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SportsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sports-details',
  templateUrl: 'sports-details.html',
})
export class SportsDetailsPage {
  sport:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sport = this.navParams.get('sport');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportsDetailsPage');
  }

}
