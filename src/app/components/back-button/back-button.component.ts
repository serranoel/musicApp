import { Component, ResolvedReflectiveFactory } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent {

  currentRoute: string;

  constructor(public _router: Router) { 
    this.currentRoute = this._router.url; 
  }

  redirect(): void {
    let route = this.currentRoute;
    if(route.includes('albums')) {
      if(route.includes('add/')) {
        console.log('artistas')
        this._router.navigate(['/artists']);
      } else {
        console.log('albums')
        this._router.navigate(['/albums']);
      }
    } else if(route.includes('artists')) {
      console.log('artistas')
      this._router.navigate(['/artists']);
    }
  }

}
