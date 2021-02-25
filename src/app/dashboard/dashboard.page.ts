import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';

import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  	constructor( private navController : NavController, private storage : Storage ) { }

	heroes: [];

	goToHome() {

		this.navController.navigateBack('home');

	}

	goToEditPage(id){

		let navigationExtras : NavigationExtras = {
			queryParams: {
				id : id,
			}
		}

		this.navController.navigateForward('edit-heroes', navigationExtras)

	}

  ngOnInit() {

	this.storage.get('data').then((response) => {
		this.heroes = response;
	})

  }

}
