import { PokemonDetailsComponent } from './pokemon/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: PokemonListComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
