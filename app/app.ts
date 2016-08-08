import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, Nav} from 'ionic-angular';
import {CordovaOauth, Facebook} from 'ng2-cordova-oauth/core';
//import {StatusBar} from 'ionic-native';

import {UsersPage} from './pages/users/users';
import {ReposPage} from './pages/repos/repos';
import {OrganizationsPage} from './pages/organizations/organizations'


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {

  private tab1: any;
  private tab2: any;
  private platform: any;
  private cordovaOauth: any;

  constructor() {
    this.platform = Platform;
    this.cordovaOauth = new CordovaOauth(new Facebook({clientId: "910719762366712", appScope: ["email"]}));;
    
    this.tab1 = UsersPage;
    this.tab2 = ReposPage;
  }

  login() {
        this.platform.ready().then(() => {
            this.cordovaOauth.login().then((success) => {
                alert(success.access_token);
            }, (error) => {
                alert(error);
            });
        });
    }
}


ionicBootstrap(MyApp, [], {
  backButtonText: 'Go Back',
  iconMode: 'ios',
  modalEnter: 'modal-slide-in',
  modalLeave: 'modal-slide-out',
  tabsPlacement: 'bottom',
  pageTransition: 'ios',
});
