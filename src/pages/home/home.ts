import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { QuotePage } from '../quote/quote';
import { InsurancePage } from '../insurance/insurance';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{title: string, icon: string, component: any, image: string}>;

  constructor(
      public navCon : NavController
  ) {
      // set our app's pages
      this.pages = [
          { title: 'Quote Insurance', icon: 'car', component: QuotePage , image : '../../assets/image/quote.jpg' },
          { title: 'My Insurance', icon: 'person', component: InsurancePage , image : '../../assets/image/miseguro.jpg'},
      ];
  }

    openPage(page) {
        // navigate to the new page if it is not the current page
        // this.nav.setRoot(page.component);
        this.navCon.push(page);
    }
}
