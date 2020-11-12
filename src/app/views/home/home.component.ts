import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';
import { AlbumsService } from 'src/app/services/albums.service';
import { ArtistsService } from 'src/app/services/artists.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  postAlbumsSubscription: Subscription;
  postArtistsSubscription: Subscription;

  constructor(public _albumsService: AlbumsService, public _artistsService: ArtistsService, public _router: Router) { }

  createDummyData() {
    this.postAlbumsSubscription = this._albumsService.postAlbums().subscribe(() => {
      this.postArtistsSubscription = this._artistsService.postArtists().subscribe(() => {
        this._router.navigate(['/albums']);
      });
    });   
  }
}
