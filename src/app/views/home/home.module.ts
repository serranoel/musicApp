import { NgModule } from '@angular/core';

//Routes
import { HomeRoutingModule } from './home-routing.module';

//Components
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [
      HomeComponent
  ]
})

export class HomeModule { }