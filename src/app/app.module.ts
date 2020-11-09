import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { APP_ROUTING } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';

//Pipes
import { NoImagePipe } from '../pipes/no-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NoImagePipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
