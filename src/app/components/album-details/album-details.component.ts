import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';

//Interfaces
import { Album } from 'src/app/interfaces/album.model';
import { Artist } from 'src/app/interfaces/artist.model';
import { Subscription } from 'rxjs';
import { IfStmt, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnDestroy {

  album: Album;
  artist: Artist;
  albumSubscription: Subscription;
  artistSubscription: Subscription;
  editAlbumSubscription: Subscription;

  editActive: boolean = false;
  deleteActive: boolean = false;
  isLoading: boolean = true;

  constructor(public _Path: ActivatedRoute, public _albumsService: AlbumsService, public _artistsService: ArtistsService, public _router: Router) {    
    this.getAlbum(this._Path.snapshot.params.id);     
  }

  getAlbum(id: string) {
    this.albumSubscription = this._albumsService.getAlbum(id).subscribe((a: Album) => {
      this.album = a;
      if(this.album.artistId) {
        this.getArtist(this.album.artistId);
      } else {
        this.isLoading = false;
      }
    });
  }

  getArtist(id: string) {
    this.artistSubscription = this._artistsService.getArtist(id).subscribe((a: Artist) => {
      this.artist = a;
      this.isLoading = false;
    });
  }

  putAlbum(): void {
    this.editAlbumSubscription = this._albumsService.putAlbum(this.album).subscribe((a: any) => {
      this.editActive = false;
    });    
  }

  activateEdit($event): void {
    this.editActive = $event;
  }

  activateDelete($event): void {
    this.deleteActive = $event;
  }  

  closeModal($event): void {
    this.deleteActive = $event;
  }

  ngOnDestroy() {
    if(this.albumSubscription) {
      this.albumSubscription.unsubscribe();
    }
    if(this.artistSubscription) {
      this.artistSubscription.unsubscribe();
    }
    if(this.editAlbumSubscription) {
      this.editAlbumSubscription.unsubscribe();
    }
  }


}
