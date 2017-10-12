import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { SuperTabsModule } from 'ionic2-super-tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  posts: Observable<any>;
  list: any = 'ListPage';
  settings: any = 'SettingsPage';
  news: any = 'NewsPage';
  sports: any = "SportsPage";
  galleries: any = "GalleriesPage";
  obituaries: any = "ObituariesPage";



  constructor(public navCtrl: NavController, public http: Http) {

  this.http.get('https://nrcolumbus.com/api/get_category_posts/?category_slug=obituaries').map(res => res.json()).subscribe
  (data => {
    this.posts = data.posts;
    console.log('my data: ', data.posts);
  })
}

  openDetails(post) {
    this.navCtrl.push('ObituariesDetailsPage', {post: post});
  }
}
