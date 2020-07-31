import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-art-view',
  templateUrl: './art-view.component.html',
  styleUrls: ['./art-view.component.scss']
})
export class ArtViewComponent implements OnInit {

  public art_name;
  public artist_data = [];

  constructor(private _artistService: ArtistService, private router: ActivatedRoute , private next: Router) { }

  ngOnInit() {
    this._artistService.getArtists()
      .subscribe(data => this.artist_data = data);

    let artName = this.router.snapshot.paramMap.get('id');
    this.art_name = artName;
  }

  onSelectArtist(artist) {
    this.next.navigate(['/artistView', artist.artist_name]);
  }

}
