import { Component, OnInit, Input } from '@angular/core';
import { ArtistService } from '../artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-list-container',
  templateUrl: './artist-list-container.component.html',
  styleUrls: ['./artist-list-container.component.scss']
})
export class ArtistListContainerComponent implements OnInit {

  @Input() serKey: string;

  public artist_data = [];

  filterItemsOfType(serKey){
    return this.artist_data.filter(x => x.artist_name.startsWith(serKey));
  }

  constructor(private _artistService: ArtistService, private router: Router ) {}

  ngOnInit() {
    this._artistService.getArtists()
      .subscribe(data => this.artist_data = data);
  }

  onSelectArtist(artist) {
    this.router.navigate(['/artistView', artist.artist_name]);
  }

}
