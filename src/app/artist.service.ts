import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iartist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private _url: string = "/assets/database/database.json";

  constructor(private http: HttpClient) { }

  getArtists(): Observable<Iartist[]> {
    return this.http.get<Iartist[]>(this._url);
  }
}
