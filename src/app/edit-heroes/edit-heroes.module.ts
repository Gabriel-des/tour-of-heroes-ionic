import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditHeroesPageRoutingModule } from './edit-heroes-routing.module';

import { EditHeroesPage } from './edit-heroes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditHeroesPageRoutingModule
  ],
  declarations: [EditHeroesPage]
})
export class EditHeroesPageModule {}
