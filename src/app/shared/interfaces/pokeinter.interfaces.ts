export interface PokemonesList {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface Pokemon {
  id: string;
  name: string;
  img: string;
}

export interface PokemonDetails {
  id: string;
  name: string;
  height: number;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}

export interface Move {
  move: Species;
}

export interface Species {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  stat: Species;
}
export interface Sprites {
  front_default: string;
}

export interface Type {
  type: Species;
}
