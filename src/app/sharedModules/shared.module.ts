import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Components
import { ConfirmPopUpComponent } from '../components/confirm-pop-up/confirm-pop-up.component';

//Pipes
import { NoImagePipe } from '../../pipes/no-image.pipe';

@NgModule({
  declarations: [
    ConfirmPopUpComponent,
    NoImagePipe
  ],
  imports: [
    CommonModule
  ],
 exports: [
    ConfirmPopUpComponent,
    NoImagePipe
 ]
})
export class SharedModule { }
