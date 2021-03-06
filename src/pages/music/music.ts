import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {
  public events;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    console.log(navParams.data.name);
    this.downloadEvents();
  }
  downloadEvents(){
    this.events = null;

    this.http.get('https://miligate.herokuapp.com/pullMusic').map(res => res.json()).subscribe(data=> {
      this.events = data;
      console.log(this.events)
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPage');

  }

  goToProfile(){
    this.navCtrl.push(ProfilePage)
  }

  gotoInfoPage(e){

    this.navCtrl.push(InfoPage,{
      data: e
    })
    
  }

}
