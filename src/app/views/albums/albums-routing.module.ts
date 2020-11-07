import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums.component';

const ROUTES: Routes = [
    {
        path: '',
        component: AlbumsComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class AlbumRoutingModule { }