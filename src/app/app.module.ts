import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PokemonModule } from './pokemon/pokemon.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, PokemonModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
