import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the QuoteDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quote-detail',
  templateUrl: 'quote-detail.html'
})
export class QuoteDetailPage {

    public id: number;
    public image : string;
    public cost: number;
    public detail : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
      this.id = navParams.get('id');
      this.image = navParams.get('image');
      this.cost = navParams.get('cost');
      this.detail = navParams.get('detail');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuoteDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
