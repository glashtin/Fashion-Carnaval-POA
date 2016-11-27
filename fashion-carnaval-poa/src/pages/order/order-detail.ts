import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { MultiLanguage } from '../../providers/multi-language'
import { GlobalVariables } from '../../providers/global-variables'
import { BasePage } from '../base-page'
import { CustomerListPage } from '../customer/customer-list'

@Component({
    selector: 'order-detail',
    templateUrl: 'order-detail.html'
})
export class OrderDetailPage extends BasePage {

    constructor(public navCtrl: NavController, public multiLanguage: MultiLanguage, public globalVariables: GlobalVariables) {
        super(multiLanguage, globalVariables);
    }

}