import { NgModule } from '@angular/core';

//Routes
import { AlbumRoutingModule } from './albums-routing.module';

//Components
import { AlbumsComponent } from './albums.component';


@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    AlbumRoutingModule
  ],
  providers: [],
  bootstrap: [
    AlbumsComponent
  ]
})

export class AlbumsModule { }