import { NgModule } from '@angular/core';

//Modules
import { SharedModule } from '../../sharedModules/shared.module';

//Routes
import { HomeRoutingModule } from './home-routing.module';

//Components
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [
      HomeComponent
  ]
})

export class HomeModule { }