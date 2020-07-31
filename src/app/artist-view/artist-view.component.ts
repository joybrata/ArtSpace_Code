import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.scss']
})
export class ArtistViewComponent implements OnInit {

  public artist_name;
  public artist_data = [];

  constructor(private _artistService: ArtistService, private route: ActivatedRoute, private nextRouter: Router) { }

  ngOnInit() {
    this._artistService.getArtists()
      .subscribe(data => this.artist_data = data);

    let artistName = this.route.snapshot.paramMap.get('id');
    this.artist_name = artistName;
  }

  onSelectArt(art) {
    this.nextRouter.navigate(['/artView', art.art_name]);
  }

}
