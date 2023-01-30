import { HttpClient } from '@angular/common/http';
import { PokeServiceService } from 'src/app/shared/services/poke-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private pokeService: PokeServiceService) {}


  ngOnInit(): void {}
  
  onSearch(value: string) {
  

    this.pokeService.getBuscarPokemon(value).subscribe(
      { next: resp => {
       this.router.navigate(['/pokemon', value]);
      },
       error: err => {
        
         this.router.navigate(['/not-found']);
       }
     }
     )   
    
 
    
    

}
}