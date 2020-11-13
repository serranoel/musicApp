import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

//Services
import { AlbumsService } from 'src/app/services/albums.service';

//Interfaces
import { Album } from '../../interfaces/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnDestroy {

  albums: any[];
  albumsSubscription: Subscription;

  constructor(public _albumService: AlbumsService) { 
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumsSubscription = this._albumService.getAlbums().subscribe((a: Album[]) => {
      this.albums = a;
    });
  }

  ngOnDestroy(): void {
    if (this.albumsSubscription) {
      this.albumsSubscription.unsubscribe();
    }
  }
  

}
