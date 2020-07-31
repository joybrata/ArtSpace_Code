import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import { AboutComponent } from './about/about.component';
import { ArtistViewComponent } from './artist-view/artist-view.component';
import { ArtViewComponent } from './art-view/art-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'artists', component: ArtistsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'artistView/:id', component: ArtistViewComponent},
  { path: 'artView/:id', component: ArtViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
