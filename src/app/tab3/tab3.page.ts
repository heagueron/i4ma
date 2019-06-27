import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { PeliculaDetalle, Genre } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  favourites: PeliculaDetalle[] = [];
  genres: Genre[] = [];

  favouritesByGenre: any[] = [{
    genre: '',
    movies: []
  }];

  constructor( private localDataService: DataLocalService,
               private movieService: MoviesService) {}

  async ngOnInit() {

    this.favourites = await this.localDataService.loadFavourites();
    console.log('bf favoritas: ', this.favourites);
    this.genres = await this.movieService.loadGenres();
    console.log(' bf genres: ', this.genres);
    this.setFavouritesByGenre( this.favourites, this.genres );
  }

  // To ensure is updated every time a new favourite is added :
  // (when removed from favourites in the modal, when the modal closes)
  /* async ionViewWillEnter() { // se importa?

    this.favourites = await this.localDataService.loadFavourites();

    this.genres = await this.movieService.loadGenres();

    this.setFavouritesByGenre( this.favourites, this.genres );
  } */





  setFavouritesByGenre( favourites: PeliculaDetalle[], genres: Genre[] ) {

    //this.favouritesByGenre = [];

    genres.forEach( genre => {
    
      const movies = [];

      favourites.forEach( movie => {
        movie.genres.forEach( item => {
          if( genre.name === item.name ) {
            movies.push( movie );
          }
        })
      })

      this.favouritesByGenre.push( { genre, movies } );

    });

    console.log('favouritesByGenre', this.favouritesByGenre);

  }

}

/** 
 * this.favouritesByGenre = [];

    genres.forEach( genre => {

      this.favouritesByGenre.push({
        genre: genre.name,
        movies: favourites.filter( movie => {
          return movie.genres.find( item => item.id === genre.id );
        });
      });


    }
 * 

 */
