import { NgModule } from '@angular/core';

//Routes
import { ArtistRoutingModule } from './artists-routing.module';

//Components
import { ArtistsComponent } from './artists.component';


@NgModule({
  declarations: [
    ArtistsComponent
  ],
  imports: [
    ArtistRoutingModule
  ],
  providers: [],
  bootstrap: [
      ArtistsComponent
  ]
})

export class ArtistsModule { }