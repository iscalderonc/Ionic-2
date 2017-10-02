import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuotePage } from '../pages/quote/quote';
import { QuoteListPage } from '../pages/quote-list/quote-list';
import { QuoteDetailPage } from '../pages/quote-detail/quote-detail';
import { QuoteContractPage } from '../pages/quote-contract/quote-contract';

import { InsurancePage } from '../pages/insurance/insurance';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuotePage,
    QuoteListPage,
    QuoteDetailPage,
    QuoteContractPage,
    InsurancePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuotePage,
    QuoteListPage,
    QuoteDetailPage,
    QuoteContractPage,
    InsurancePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
