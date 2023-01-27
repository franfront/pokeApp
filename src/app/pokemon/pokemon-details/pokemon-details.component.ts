import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/shared/interfaces/pokeinter.interfaces';
import { PokeServiceService } from 'src/app/shared/services/poke-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon!: PokemonDetails;

  constructor(
    private pokeService: PokeServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.pokeService.getBuscarPokemon(params['id']).subscribe((poke) => {
        console.log(poke);
        this.pokemon = poke;
      });
    });
  }
}
