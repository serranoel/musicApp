import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsListComponent } from '../../components/albums-list/albums-list.component';
import { AlbumFormComponent } from '../../components/album-form/album-form.component';
import { AlbumDetailsComponent } from '../../components/album-details/album-details.component';

const ROUTES: Routes = [
    {
        path: '',
        component: AlbumsListComponent
    },
    {
        path: 'add',
        component: AlbumFormComponent
    },
    {
        path: 'add/:id',
        component: AlbumFormComponent
    },
    {
        path: 'album/:id',
        component: AlbumDetailsComponent
    }    
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class AlbumRoutingModule { }