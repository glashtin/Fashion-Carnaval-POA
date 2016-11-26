import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MultiLanguage } from '../../providers/multi-language'
import { GlobalVariables } from '../../providers/global-variables'
import { BasePage } from '../base-page'

@Component({
    selector: 'customer-form',
    templateUrl: 'customer-form.html'
})


export class CustomerFormPage extends BasePage {

    customerList = {};

    constructor(public navCtrl: NavController, public multiLanguage: MultiLanguage, public globalVariables: GlobalVariables) {
        super(multiLanguage, globalVariables);
    }

}