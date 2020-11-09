import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//Services
import { ArtistsService } from 'src/app/services/artists.service';

//Routes
import { ArtistRoutingModule } from './artists-routing.module';

//Components
import { ArtistsComponent } from './artists.component';


@NgModule({
  declarations: [
    ArtistsComponent
  ],
  imports: [
    ArtistRoutingModule,
    HttpClientModule
  ],
  providers: [
    ArtistsService
  ],
  bootstrap: [
      ArtistsComponent
  ]
})

export class ArtistsModule { }