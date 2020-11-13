import { IfStmt } from '@angular/compiler';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlbumsService } from 'src/app/services/albums.service';
import { ArtistsService } from 'src/app/services/artists.service';

//Interfaces
import { Album } from '../../interfaces/album.model';
import { Artist } from '../../interfaces/artist.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  albums: Album[];
  artists: Artist[];

  getAlbumsSubscription: Subscription;
  getArtistsSubscription: Subscription;
  postAlbumsSubscription: Subscription;
  postArtistsSubscription: Subscription; 

  loading: boolean = true;

  constructor(public _albumsService: AlbumsService, public _artistsService: ArtistsService, public _router: Router) { 
    this.checkEmptyAlbums();
  }

  checkEmptyAlbums(): void {
    this.getAlbumsSubscription = this._albumsService.getAlbums().subscribe((a: Album[]) => {
      this.albums = a;    
      this.checkEmptyArtists();
    })
  }

  checkEmptyArtists(): void {
    this.getArtistsSubscription = this._artistsService.getArtists().subscribe((a: Artist[]) => {
      this.artists = a;
      this.loading = false;
    })
  }

  createDummyData(): void {
    this.postAlbumsSubscription = this._albumsService.postAlbums().subscribe(() => {
      this.postArtistsSubscription = this._artistsService.postArtists().subscribe(() => {
        this._router.navigate(['/albums']);
      });
    });   
  }

  ngOnDestroy() {
    if(this.getAlbumsSubscription) {
      this.getAlbumsSubscription.unsubscribe();
    }
    if(this.getArtistsSubscription) {
      this.getArtistsSubscription.unsubscribe();
    }
    if(this.postAlbumsSubscription) {
      this.postAlbumsSubscription.unsubscribe();
    }
    if(this.postArtistsSubscription) {
      this.postArtistsSubscription.unsubscribe();
    }
  }
}
