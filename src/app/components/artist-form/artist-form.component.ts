import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

//Interfaces
import { Artist } from 'src/app/interfaces/artist.model';

//Services
import { ArtistsService } from 'src/app/services/artists.service';


@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})
export class ArtistFormComponent {

  name: string;
  photoUrl: string;

  postArtisSubscription: Subscription;

  formSubmited: boolean = false;

  constructor(public _artistsService: ArtistsService, public _router: Router) { }

  sendArtistData(form: NgForm): void {
    this.formSubmited = true;
      if(form.valid) {
        let artist: Artist = this.createArtist();
        this.postArtist(artist);       
      } else {
        form.reset();
        this.formSubmited = false;
      }
  }

  postArtist(artist: Artist) {
    this.postArtisSubscription = this._artistsService.postArtist(artist).subscribe(() => {
      this._router.navigate(['/artists']);
    }); 
  }

  createArtist() {
    return {
      name: this.name,
      photoUrl: this.photoUrl
    }
  }

}

