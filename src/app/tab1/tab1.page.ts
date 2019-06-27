import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];

  popularesAdicionales = false;
  

  constructor( private moviesService: MoviesService) {}

  ngOnInit() {
    console.log('Searching recent movies .... ');
    this.moviesService.getFeature()
      .subscribe( resp => {
        //console.log('Resp', resp);
        this.peliculasRecientes = resp.results;

      } );
    
    console.log('Searching popular movies .... ');
    this.getPopulares();

  }

  buscarMasPopulares(){
    
    console.log('Searching more popular movies .... ');
    this.getPopulares();

  }

  getPopulares() {

    this.moviesService.getPopulares()
      .subscribe( resp => {
        const arrTemporal = [ ...this.populares, ...resp.results ];
        this.populares = arrTemporal;

        // El push no funciona por el pipe.
        // this.populares.push( ...resp.results );
      });  
  }



}
