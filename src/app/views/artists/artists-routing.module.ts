import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistsComponent } from './artists.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ArtistsComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class ArtistRoutingModule { }