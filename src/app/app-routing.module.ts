import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./views/home/home.module').then( m => m.HomeModule)
    }, 
    {
        path: 'albums',
        loadChildren: () => import('./views/albums/albums.module').then( m => m.AlbumsModule)
    },
    {
        path: 'artists',
        loadChildren: () => import('./views/artists/artists.module').then( m => m.ArtistsModule)
    },
    {
        path: '', pathMatch: 'full', redirectTo: 'home'
    },
    {
        path: '**', pathMatch: 'full', redirectTo: 'home'
    }
]

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES)