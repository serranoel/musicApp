import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Modules
import { SharedModule } from '../../sharedModules/shared.module';

//Routes
import { AlbumRoutingModule } from './albums-routing.module';

//Pipes
import { noGenrePipe } from '../../../pipes/no-genre.pipe';

//Components
import { AlbumsComponent } from './albums.component';
import { AlbumsListComponent } from '../../components/albums-list/albums-list.component';
import { AlbumFormComponent } from '../../components/album-form/album-form.component';
import { AlbumDetailsComponent } from '../../components/album-details/album-details.component';
import { AlbumCardComponent } from '../../components/album-card/album-card.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumsListComponent,
    AlbumFormComponent,
    AlbumDetailsComponent,
    AlbumCardComponent,
    ButtonsComponent,
    noGenrePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlbumRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [
    AlbumsComponent
  ]
})

export class AlbumsModule { }