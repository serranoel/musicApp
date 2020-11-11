import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Modules
import { SharedModule } from '../../sharedModules/shared.module';

//Services
import { ArtistsService } from 'src/app/services/artists.service';

//Routes
import { ArtistRoutingModule } from './artists-routing.module';

//Services
import {HttpClientModule} from '@angular/common/http'

//Components
import { ArtistsComponent } from './artists.component';
import { ArtistListComponent } from '../../components/artist-list/artist-list.component';
import { ArtistFormComponent } from '../../components/artist-form/artist-form.component';
import { ArtistCardComponent } from '../../components/artist-card/artist-card.component';

@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistListComponent,
    ArtistFormComponent,
    ArtistCardComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ArtistsService
  ],
  bootstrap: [
      ArtistsComponent
  ]
})

export class ArtistsModule { }