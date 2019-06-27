import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB, PeliculaDetalle, RespuestaCredits, Genre } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const URL = environment.movie.url;
const apiKey = environment.movie.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularPage = 0;

  genres: Genre[] = [];

  constructor( private http: HttpClient) { }

  private ejecutarQuery<T>( query: string ) {

    // Adjust query:
    query = `${URL}${query}`;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`;

    console.log('query',query);

    return this.http.get<T>( query );

  }

  getFeature() {

    const hoy = new Date();
    const ultimoDia = new Date( hoy.getFullYear(), hoy.getMonth()+1,0).getDate();

    const mes = hoy.getMonth() + 1;

    let mesString: string;
    if ( mes < 10 ) {
      mesString = '0' + mes;
    } else {
      mesString = mes.toString();
    }

    const inicio = `${ hoy.getFullYear() }-${mesString}-01`;
    const fin = `${ hoy.getFullYear() }-${mesString}-${ultimoDia}`;


    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`);

  }

  getPopulares( ) {

    this.popularPage++;

    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularPage}`;

    return this.ejecutarQuery<RespuestaMDB>(query);

  }

  // Movie detail
  getPeliculaDetalle( id: string ) {
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`);
  }

  getActoresPelicula( id: string ) {
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`);
  }

  buscarPelicula( text: string ) {
    return this.ejecutarQuery(`/search/movie?query=${ text }`);
  }

  loadGenres(): Promise<Genre[]> {

    return new Promise( resolve =>{

      this.ejecutarQuery(`/genre/movie/list?a=1`)
      .subscribe( resp => {
        this.genres = resp['genres'];
        resolve( this.genres );
      });

    });
  
  }







}


/**
 * return this.http.get<RespuestaMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-01-31&api_key=2f1ad1a8e8aabbd7f23d97e90e7b2afd&language=es&include_image_language=es`);
  }
 */