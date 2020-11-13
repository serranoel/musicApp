import { Component, Input } from '@angular/core';

//Interfaces
import { Album } from 'src/app/interfaces/album.model';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent {

  @Input() album: Album;

  constructor() { }
}
