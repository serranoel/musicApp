import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { APP_ROUTING } from './app-routing.module';

//Services
import { ArtistsService } from './services/artists.service';
import { AlbumsService } from './services/albums.service';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    ArtistsService,
    AlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
