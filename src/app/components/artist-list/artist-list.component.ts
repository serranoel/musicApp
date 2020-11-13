import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

//Services
import { ArtistsService } from 'src/app/services/artists.service';

//Interfaces
import { Artist } from '../../interfaces/artist.model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnDestroy {

  artists: Artist[];
  id: string;

  artistsSubcription: Subscription;

  editActive: boolean = false;
  deleteActive: boolean = false; 

  constructor(public _artistsService: ArtistsService) { 
    this.getArtists();
  }

  getArtists(): void {
    this.artistsSubcription = this._artistsService.getArtists().subscribe((a: Artist[]) => {
      this.artists = a;
    });
  }

  activateDelete($event): void {
    this.deleteActive = $event;
  }

  getIdToDelete($event): void {
    this.id = $event;
  }

  closeModal($event): void {
    this.deleteActive = $event;
    this.getArtists();
  }

  ngOnDestroy() {
    if(this.artistsSubcription) {
      this.artistsSubcription.unsubscribe();
    }
  }

}
