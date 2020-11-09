import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArtistsService } from 'src/app/services/artists.service';

//Interfaces
import { Artist } from '../../interfaces/artist.model';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent {

  artists: Artist[];
  artist: Artist;
  subscription: Subscription;

  constructor(public _ArtistsService: ArtistsService) { 
    // this.subscription = this._ArtistsService.getAllArtist().subscribe({
    //   next(artists) {
    //     console.log("hola")
    //     console.log(artists);
    //   }, 
    //   error(err) {
    //     console.log(err);
    //   },
    //   complete() {
    //     console.log("Holaaaa");
    //   }
    //});
  }

  

}
