import { Injectable } from '@angular/core';

//Interfaces
import { Album } from '../interfaces/album.model';
import { ArtistsService } from './artists.service';

//Dummy Data
import DummyAlbums from '../../database/albums';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  albums: Album[] = [];

  constructor(public _http: HttpClient, public _artistsService: ArtistsService) { }

  getBaseUrl(endpoint: string, type: string, body?: Object): Observable<Object> {
    const url = `http://localhost:3000/${endpoint}`;

    const headers = new HttpHeaders({
      "x-requested-with": "XMLHttpResponse"
    });

    switch (type) {
      case 'get':
        return this._http.get(url, { headers });
      case 'post':
        return this._http.post(url, body, { headers });
      case 'put':
        return this._http.put(url, body, { headers });
      case 'delete':
        return this._http.delete(url, { headers });
    }    
  }

  getAlbums(): Observable<Object> {
    return this.getBaseUrl('albums/all', 'get');
  }

  getAlbum(id: string): Observable<Object> {
    return this.getBaseUrl(`album/${id}`, 'get');
  }

  postAlbum(album: Album): Observable<Object> {
    return this.getBaseUrl(`album`, 'post', album);
  }

  postAlbums(): Observable<Object> {
    return this.getBaseUrl(`albums`, 'post', DummyAlbums);
  }

  putAlbum(album: Album): Observable<Object> {
    return this.getBaseUrl(`album/${album._id}`, 'put', album);
  }

  deleteAlbum(id: string): Observable<Object> {
    return this.getBaseUrl(`album/${id}`, 'delete');
  }


}
