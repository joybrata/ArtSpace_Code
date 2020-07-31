import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public artist_data = [];

  constructor(private _artistService: ArtistService, private nextRouter: Router) { }

  ngOnInit() {
    this._artistService.getArtists()
      .subscribe(data => this.artist_data = data);
  }

  onSelectArt(art) {
    this.nextRouter.navigate(['/artView', art.art_name]);
  }
}
