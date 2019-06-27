import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';



const URL = environment.movie.imgPath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string, size: string = 'w500'): string {

    if ( !img ) {
      return './assets/no-image-banner.jpg';
    }

    const imgUrl = `${ URL }/${ size }${ img }`;
    // console.log('URL', imgUrl); para ver como se forma la url

    return imgUrl;

  }



}

/* See docs at https://developers.themoviedb.org/3/getting-started/images */

// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg