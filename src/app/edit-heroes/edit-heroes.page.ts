import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-edit-heroes',
	templateUrl: './edit-heroes.page.html',
	styleUrls: ['./edit-heroes.page.scss'],
})
export class EditHeroesPage implements OnInit {

	public hero : [];

	constructor(private navController: NavController, private storage: Storage, private activatedRoute: ActivatedRoute ) { }

	goToDashboard(){

		this.navController.navigateBack('dashboard');

	}

	editHero(id){

		let nameHero: string;
		let i : number = 0;

		nameHero = this.hero[i]['name'];

		this.storage.get('data').then((response) => {

			let data : [] = response;

			let newData = data.map(data => data['id'] === id ? {id : id, name : nameHero} : data);

			this.storage.set('data', newData);


		});

	}

	getHero(id){

		this.storage.get('data').then((response) => {

			let data = response;

			data = data.filter((obj) => {
				return obj.id == id;
			});

			this.hero = data;

			return this.hero;

		});

	}

	ngOnInit() {

		let id : number;

		this.activatedRoute.queryParams.subscribe(params => {
			
			id = params['id'];
			this.getHero(id);
			
		});

	}

}
