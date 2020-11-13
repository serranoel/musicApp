import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  editActive: boolean = false;
  

  @Input() deleteActive: boolean;

  @Output() editEvent = new EventEmitter<boolean>();
  @Output() deleteEvent = new EventEmitter<boolean>();

  constructor() { }

  sendEditActivation(): void {
    this.editActive = true;
    this.editEvent.emit(this.editActive)
  }

  sendDeleteActivation(): void {
    this.deleteActive = true;
    this.deleteEvent.emit(this.deleteActive)
  }

}
