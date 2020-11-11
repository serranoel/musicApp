import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistListComponent } from '../../components/artist-list/artist-list.component';
import { ArtistFormComponent } from '../../components/artist-form/artist-form.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ArtistListComponent,
    },
    {
        path: 'add',
        component: ArtistFormComponent
    }      
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class ArtistRoutingModule { }