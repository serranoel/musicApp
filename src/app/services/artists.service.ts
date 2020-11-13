import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  

//Interfaces
import { Artist } from '../interfaces/artist.model';

//Dummy Data
import DummyArtists from '../../database/artists';

//Router
import { Router } from '@angular/router';         
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArtistsService {

  artists: Artist[] = [];

  constructor(public _router: Router, public _http: HttpClient) { }   
   

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

  getArtists(): Observable<Object> {
    return this.getBaseUrl('artists/all', 'get');
  }

  getArtist(id: string): Observable<Object> {
    return this.getBaseUrl(`artist/${id}`, 'get');
  }

  postArtist(artist: Artist): Observable<Object> {
    return this.getBaseUrl(`artist`, 'post', artist);
  }

  postArtists(): Observable<Object> {
    return this.getBaseUrl('artists', 'post', DummyArtists);
  }

  deleteArtist(id: string): Observable<Object> {
    return this.getBaseUrl(`artist/${id}`, 'delete');
  }

}
