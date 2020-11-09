import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Routes
import { AlbumRoutingModule } from './albums-routing.module';

//Components
import { AlbumsComponent } from './albums.component';
import { AlbumsListComponent } from '../../components/albums-list/albums-list.component';
import { AlbumFormComponent } from '../../components/album-form/album-form.component';
import { AlbumDetailsComponent } from '../../components/album-details/album-details.component';
import { AlbumCardComponent } from '../../components/album-card/album-card.component';


@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumsListComponent,
    AlbumFormComponent,
    AlbumDetailsComponent,
    AlbumCardComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule
  ],
  providers: [],
  bootstrap: [
    AlbumsComponent
  ]
})

export class AlbumsModule { }