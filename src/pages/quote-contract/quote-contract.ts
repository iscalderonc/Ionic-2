import { Component } from '@angular/core';
import { NavController, NavParams , AlertController } from 'ionic-angular';
import { QuoteService } from '../../services/quote-services'
import { FormGroup, FormControl} from '@angular/forms';
import { HomePage } from '../home/home'

/*
  Generated class for the QuoteContract page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quote-contract',
  templateUrl: 'quote-contract.html',
  providers: [QuoteService]
})
export class QuoteContractPage {

  public payments : Array<{text: string, value: number}>;

  formDataPerson = new FormGroup({
       name : new FormControl(),
       age : new FormControl(),
       adress : new FormControl(),
       plate : new FormControl(),
       serial_number : new FormControl(),
       method_payment : new FormControl()
  })

  constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public services: QuoteService,
        public alertCtrl: AlertController) {

        this.payments = this.services.getPayments();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuoteContractPage');
  }

  contract(){
      this.showMessage();
      this.navCtrl.setRoot(HomePage);
  }

  showMessage() {
       let alert = this.alertCtrl.create({
            title: 'Insurance App!',
            subTitle: 'Congratulations, you now have insurance!',
            buttons: ['OK']
        });
        alert.present();
  }

}
