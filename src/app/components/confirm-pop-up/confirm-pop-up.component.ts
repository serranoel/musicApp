import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlbumsService } from 'src/app/services/albums.service';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-confirm-pop-up',
  templateUrl: './confirm-pop-up.component.html',
  styleUrls: ['./confirm-pop-up.component.css']
})
export class ConfirmPopUpComponent implements OnDestroy {

  @Input() id: string;
  @Input() entity: string;

  @Output() cancelEvent = new EventEmitter<boolean>();

  deleteAlbumSubscription: Subscription;
  deleteArtistSubscription: Subscription;

  constructor(public _albumsService: AlbumsService, public _artistsService: ArtistsService, public _router: Router) { }

  confirm() {
    if(this.entity == 'album') {
      this.deleteAlbum();
    } else {
      this.deleteArtist(); 
    }    
  }

  deleteArtist(): void {
    this.deleteArtistSubscription = this._artistsService.deleteArtist(this.id).subscribe((a) => {
      this.cancel();
    }); 
  }

  deleteAlbum(): void {
    this.deleteAlbumSubscription = this._albumsService.deleteAlbum(this.id).subscribe(() => {
      this._router.navigate([`albums`]);
    }); 
  }

  cancel(): void {
    this.cancelEvent.emit(false);
  }

  ngOnDestroy() {
    if(this.deleteAlbumSubscription) {
      this.deleteAlbumSubscription.unsubscribe();
    }
    if(this.deleteArtistSubscription) {
      this.deleteArtistSubscription.unsubscribe();
    }
  }

}
