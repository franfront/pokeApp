import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from '../services/poke-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private pokeService: PokeServiceService) { }

  ngOnInit(): void {

   
  }

 


}
