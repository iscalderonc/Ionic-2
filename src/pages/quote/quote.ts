import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl} from '@angular/forms';
import { QuoteListPage } from '../quote-list/quote-list';
import { QuoteService } from '../../services/quote-services';
/*
  Generated class for the Quote page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
  providers: [QuoteService]
})
export class QuotePage {

  public brands : Array<{text: string, value: string}>;
  public models : Array<{text: string, value: number}>;
  public lines : Array<{text: string, value: string}>;
  public versions : Array<{text: string, value: string}>;
  public citys : Array<{text: string, value: number}>;

  formDataQuote = new FormGroup({
        brand : new FormControl(),
        model : new FormControl(),
        line : new FormControl(),
        version : new FormControl(),
        city : new FormControl(),
        ageDriver : new FormControl()
  })

  constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public services: QuoteService
      ) {

      this.brands = this.services.getBrands();
      this.citys = this.services.getCity();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }

  getQuotes(){
    console.log(this.formDataQuote.value);
    this.navCtrl.push(QuoteListPage,{
       brand:       this.formDataQuote.value.brand ,
       model:       this.formDataQuote.value.model ,
       line:        this.formDataQuote.value.line ,
       version:     this.formDataQuote.value.version ,
       city:        this.formDataQuote.value.city ,
       ageDriver:   this.formDataQuote.value.ageDriver
      });
  }

  selectedBrand(brand){
      this.models = this.services.getModels(brand);
      console.log('Select Brand:');
      // this.resetSelect('brand');
  }

  selectedModel(model){
      this.lines = this.services.getLine(this.formDataQuote.value.brand,model);
      console.log('Select Model:');
      // this.resetSelect('model');
  }

  selectedLine(line){
    this.versions = this.services.getVersion(this.formDataQuote.value.brand,this.formDataQuote.value.model,line);
  }

  /*
  resetSelect(element){

      let elementsScreen = ['brand','model','line','version'];
      let indexElement = -1;

      if(element){
          indexElement = $.map(elementsScreen, function(ele,index){
              if(ele.indexOf(element) > -1)
                  return index;
          });

          $.each(elementsScreen,function (index, id) {
              if (index >= (indexElement + 1)) {
                  console.log('Reset: ' + id);
              }
          });
      }
  }
  */
}
