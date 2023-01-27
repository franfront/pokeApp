import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/interfaces/pokeinter.interfaces';
import { PokeServiceService } from 'src/app/shared/services/poke-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemones: Pokemon[] = [];

  pageAct: number = 1;

  constructor(private pokeService: PokeServiceService) { }

  ngOnInit(): void {
    this.pokeService.getPokemones().subscribe(resp => {
      this.pokemones = resp;
      console.log(this.pokemones);
    });
  }

  

}
