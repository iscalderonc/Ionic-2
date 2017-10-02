import { Component } from '@angular/core';
import { ModalController , NavController, NavParams } from 'ionic-angular';
import { QuoteDetailPage } from '../quote-detail/quote-detail';
import { QuoteContractPage } from '../quote-contract/quote-contract';
import { QuoteService } from '../../services/quote-services'
import { QuoteVO } from '../../vo/quote-vo'

/*
  Generated class for the QuoteList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quote-list',
  templateUrl: 'quote-list.html',
  providers: [QuoteService]
})
export class QuoteListPage {

  public quote : any = QuoteVO
  public quotes: Array<{image_avatar: string, cost: number, insurance: string, image: string , detail: string , contact_number: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public services: QuoteService,public modalCtrl: ModalController) {
      this.quote = new QuoteVO(
            navParams.get('brand'),
            navParams.get('model'),
            navParams.get('line'),
            navParams.get('version'),
            navParams.get('city'),
            navParams.get('ageDriver')
      );

      this.quotes = this.services.getQuotes(this.quote);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuoteListPage');
  }

  getDetailQuote(quote){
      // this.navCtrl.push(QuoteDetailPage)
      let modal = this.modalCtrl.create(QuoteDetailPage, {
          id: quote.id,
          image: quote.image,
          cost: quote.cost,
          detail: quote.detail
      });

      modal.present();
  }

  contractQuote(quote){
      this.navCtrl.push(QuoteContractPage, {
          id: quote.id,
          image: quote.image,
          cost: quote.cost,
          detail: quote.detail
      })
  }

  call(telephoneNumber){
      console.log("TelephoneNumber:"+telephoneNumber);
  }
}
