import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { App } from 'ionic-angular';

/**
 * Generated class for the SportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
})
export class SportsPage {

  sports: Observable<any>;

  constructor(private app: App, public http: Http) {

    this.http.get('https://nrcolumbus.com/api/get_category_posts/?category_slug=sports').map(res => res.json()).subscribe
    (data => {
      this.sports = data.posts;
      console.log('my sports: ', data.posts);
    })

  }

  openDetails(sport) {

    this.app.getRootNav().push('SportsDetailsPage', {sport: sport});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportsPage');
  }

}
