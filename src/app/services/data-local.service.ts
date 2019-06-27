import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  // Películas favoritas:
  peliculas: PeliculaDetalle[] = [];

  constructor( private storage: Storage,
               private toastCtrl: ToastController ){
      this.loadFavourites();
    }

  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2500
    });
    toast.present();
  }

  guardarPelicula( pelicula: PeliculaDetalle) {
    let existe = false;
    let mensaje = '';

    for ( const peli of this.peliculas ) {
      if (peli.id === pelicula.id ) {
        existe = true;
        break;
      }
    }

    if ( existe ) {
      this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id );
      mensaje = `${pelicula.title} removed from favourites`;
    } else {
      this.peliculas.push( pelicula );
      mensaje = `${pelicula.title} added to favourites`;
    }

    this.storage.set( 'peliculas', this.peliculas );
    this.presentToast( mensaje );

  }

  async loadFavourites() {

    const savedMovies = await this.storage.get( 'peliculas' );
    this.peliculas = savedMovies || [];
    return this.peliculas;

  }

  async isFavourite( id: any ) {

    id = Number(id);

    await this.loadFavourites();
    const movieInArray = this.peliculas.find( movie => movie.id === id );

    return ( movieInArray ) ? true : false;

  }


}
