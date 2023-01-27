import { PokemonDetails } from 'src/app/shared/interfaces/pokeinter.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pokemon, PokemonesList} from '../interfaces/pokeinter.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPokemones() {
    return this.http.get<PokemonesList>(`${this.baseUrl}/pokemon?limit=1500`)
    .pipe(
      map( this.transformarPokemon)
    )
  }

  private transformarPokemon(resp: PokemonesList) {

    const pokemonList: Pokemon[] = resp.results.map(poke =>{
      
      const urlArr = poke.url.split('/');
      const id = urlArr[6];
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      
      return{
        id,
        name: poke.name,
        img,
      }

    })

    return pokemonList;
  }


    getBuscarPokemon(termino: string) {
      return this.http.get<PokemonDetails>(`${this.baseUrl}/pokemon/${termino}`)
    }


}
