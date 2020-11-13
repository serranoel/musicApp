import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Components
import { ConfirmPopUpComponent } from '../components/confirm-pop-up/confirm-pop-up.component';
import { ErrorComponent } from '../components/error/error.component';
import { BackButtonComponent } from '../components/back-button/back-button.component';

//Pipes
import { NoImagePipe } from '../../pipes/no-image.pipe';

@NgModule({
  declarations: [
    ConfirmPopUpComponent,
    ErrorComponent,
    BackButtonComponent,
    NoImagePipe
  ],
  imports: [
    CommonModule
  ],
 exports: [
    ConfirmPopUpComponent,
    BackButtonComponent,
    NoImagePipe
 ]
})
export class SharedModule { }
