import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import {ChilloutPage } from '../chillout/chillout';
import {ProfilPage } from '../profil/profil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChilloutPage;
  tab3Root = ProfilPage;
  tab4Root = ProfilPage;
  tab5Root = ProfilPage;


  constructor() {

  }
}
