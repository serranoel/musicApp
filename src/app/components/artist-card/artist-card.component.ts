import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

//Interfaces
import { Artist } from 'src/app/interfaces/artist.model';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent {

  @Input() artist: Artist;

  isMenuOpen: boolean = false;
  deleteActive: boolean = false;

  @Output() deleteEvent = new EventEmitter<boolean>();
  @Output() idEvent = new EventEmitter<string>();

  constructor(public _router: Router) { }

  sendDeleteActivation(): void {
    this.deleteActive = true;
    this.deleteEvent.emit(this.deleteActive);
  }

  sendId(): void {
    this.idEvent.emit(this.artist._id);
  }

  associateSong(): void {
    this._router.navigate(['/albums', 'add', this.artist._id]);
  }


}
