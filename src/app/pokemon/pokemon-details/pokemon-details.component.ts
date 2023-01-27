import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from 'src/app/shared/services/poke-service.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

   termino: number = 1;

  constructor(private pokeService: PokeServiceService) { }

  ngOnInit(): void {
    this.pokeService.getBuscarPokemon(this.termino).subscribe(resp => {
      console.log(resp);
    })


  }

  buscando(){
    this.pokeService.getBuscarPokemon(this.termino)
    .subscribe(resp => {
      console.log(resp);
    });
  }

}
