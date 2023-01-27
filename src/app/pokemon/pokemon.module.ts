import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailsComponent],
  exports: [PokemonListComponent],
  imports: [CommonModule, NgxPaginationModule, RouterModule],
})
export class PokemonModule {}
