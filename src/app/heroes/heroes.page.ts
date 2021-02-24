import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.page.html',
	styleUrls: ['./heroes.page.scss'],
})
export class HeroesPage implements OnInit {

	constructor(private navController: NavController, private storage : Storage ) { }

	public addHero : string;
	public heroes : {};

	goToHome() {

		this.navController.navigateForward('home');

	}

	// Pegar informações do storage
	// Editar informações
	// Atualizar o storage
	// Atualizar página
	saveHero() {

		let data : Hero[] = [];

		this.storage.get('data').then((result) => {

			if(result != null){

				let id : number = this.getLastId(result);
				
				let hero : Hero = {
					id: id,
					name: this.addHero
				}

				data = result;
					
				data.push(hero);
	
				this.storage.set('data', data).then((response) => {
					this.heroes = response;
				});

			} else {

				let hero : Hero = {
					id: 1,
					name: this.addHero
				}

				data.push(hero);

				this.storage.set('data', data).then((response) => {
					this.heroes = response;
				});

			}

		})

	}

	getLastId(result): number{

		let id : number;

		if(result){

			result.forEach((value) => {
			
				id = value['id'] + 1;
			
			})

			return id;

		} else{

			return id = 1;
		}

	}

	deleteHero(id){

		this.storage.get('data').then((response) => {

			let data = response;

			data = data.filter((obj) => {
				return obj.id != id;
			});

			this.storage.set('data', data).then((response) => {
				this.heroes = response;
			});

		})

	}

	ngOnInit() {

		this.storage.get('data').then((response) => {
			this.heroes = response;
		})

	}

}

interface Hero{

	id: number,
	name: string

}