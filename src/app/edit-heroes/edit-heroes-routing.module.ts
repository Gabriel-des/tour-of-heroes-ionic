import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditHeroesPage } from './edit-heroes.page';

const routes: Routes = [
  {
    path: '',
    component: EditHeroesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditHeroesPageRoutingModule {}
