import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

//Services
import { AlbumsService } from 'src/app/services/albums.service';

//Interfaces
import { Album } from '../../interfaces/album.model';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.css']
})
export class AlbumFormComponent {

  title: string;
  coverUrl: string;
  genre: string;
  year: number;
  artistId: string;

  postAlbumSubscription: Subscription;


  formSubmited: boolean = false;

  constructor(public _albumsService: AlbumsService, public _router: Router, public _Path: ActivatedRoute) {
    this.artistId = this._Path.snapshot.params.id;
   }

  sendAlbumData(form: NgForm): void {
    this.formSubmited = true;
      if(form.valid) {
        let newAlbum: Album = this.createAlbum();
        this.postAlbum(newAlbum);       
      } else {
        form.reset();
        this.formSubmited = false;
      }
  }

  createAlbum() {
    let album: Album = {
      title: this.title,
      coverUrl: this.coverUrl,
      year: this.year,
      genre: this.genre
    }
    if(this.artistId) {
      album['artistId'] = this.artistId;
    }
    return album;     
  }

  postAlbum(album: Album) {
    this.postAlbumSubscription = this._albumsService.postAlbum(album).subscribe((a: Album) => {
      this._router.navigate(['/albums', 'album', a._id]);
    }); 
  }

  ngOnDestroy() {
    if(this.postAlbumSubscription) {
      this.postAlbumSubscription.unsubscribe();
    }
  }

}
