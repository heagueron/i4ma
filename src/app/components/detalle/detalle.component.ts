import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];

  oculto = 150;

  isFavourite = false;

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  constructor(  private movieService: MoviesService,
                private modalCtrl: ModalController,
                private dataLocal: DataLocalService) { }

  async ngOnInit() {

    this.isFavourite = await this.dataLocal.isFavourite( this.id );

    this.movieService.getPeliculaDetalle( this.id )
      .subscribe( resp => {
        console.log( resp );
        this.pelicula = resp;
      });

    this.movieService.getActoresPelicula( this.id )
      .subscribe( resp => {
        console.log( resp );
        this.actores = resp.cast;
    });


  }

  regresar() {
    
    console.log('back');
    this.modalCtrl.dismiss();

  }

  favorito() {
    console.log( 'love it' );
    this.dataLocal.guardarPelicula( this.pelicula );
    this.isFavourite = !this.isFavourite;
  }

}
