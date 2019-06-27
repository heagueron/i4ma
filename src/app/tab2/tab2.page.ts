import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';

  ideas: string[] = ['Spiderman', 'Batman', 'X-Men', 'Toy Story', 'La vida es bella']

  isSearching = false;

  // Resultado de la busqueda:
  peliculas: Pelicula[] = [];

  constructor( private movieService: MoviesService,
               private modalCtrl: ModalController) {}

  buscar( event: any ) {
    
    if ( event.detail.value === '') {
      this.isSearching = false;
      this.peliculas = [];
      return;
    }

    this.isSearching = true;
    console.log( event.detail.value );
    const searchTerm = event.detail.value;
    this.movieService.buscarPelicula( searchTerm )
      .subscribe( resp => {
        console.log('Respuesta', resp);
        this.isSearching = false;
        // Si no deseo crear la interfaz:
        this.peliculas = resp[ 'results' ];
      });
  }

  async verDetalle( id: string ) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }

}
