import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Routes
import { AlbumRoutingModule } from './albums-routing.module';

//Components
import { AlbumsComponent } from './albums.component';
import { AlbumsListComponent } from '../../components/albums-list/albums-list.component';
import { AlbumFormComponent } from '../../components/album-form/album-form.component';
import { AlbumDetailsComponent } from '../../components/album-details/album-details.component';
import { AlbumCardComponent } from '../../components/album-card/album-card.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { ConfirmPopUpComponent } from '../../components/confirm-pop-up/confirm-pop-up.component';

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumsListComponent,
    AlbumFormComponent,
    AlbumDetailsComponent,
    AlbumCardComponent,
    ButtonsComponent,
    ConfirmPopUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlbumRoutingModule
  ],
  providers: [],
  bootstrap: [
    AlbumsComponent
  ]
})

export class AlbumsModule { }