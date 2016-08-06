import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {UsersPage} from './pages/users/users';
import {ReposPage} from './pages/repos/repos';
import {OrganizationsPage} from './pages/organizations/organizations'


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
    @ViewChild(Nav) nav: Nav;

    // make UsersPage the root (or first) page
    // rootPage: any = UsersPage;
    rootPage: any = UsersPage;
    pages: Array<{ title: string, component: any }>;
    constructor(
        private platform: Platform,
        private menu: MenuController
    ) {
        this.initializeApp();

        // set our app's pages
        this.pages = [
            // Comment out pages we deleted
            //{ title: 'Hello Ionic', component: HelloIonicPage },
            //{ title: 'My First List', component: ListPage }
            { title: 'Users', component: UsersPage },
            { title: 'Repos', component: ReposPage },
            { title: 'Organizations', component: OrganizationsPage }
        ];
    }

    
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
