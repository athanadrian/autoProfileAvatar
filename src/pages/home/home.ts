import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import md5 from 'crypto-md5';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: any;
  password: any;
  profileAvatar: any = "https://www.gravatar.com/avatar/";

  constructor(public navCtrl: NavController) {

  }

  emailChanged() {
    this.profileAvatar = "https://www.gravatar.com/avatar/" + md5(this.email.toLowerCase(), 'hex');
  }

}
