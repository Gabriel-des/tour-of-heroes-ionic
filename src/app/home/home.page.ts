import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(private navController: NavController) { }

	goToDashboard() {

		this.navController.navigateForward('dashboard');

	}

	goToHeroes() { 

		this.navController.navigateForward('heroes');

	}

}
