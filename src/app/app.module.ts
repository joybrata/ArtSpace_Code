import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent, Alphabets } from './artists/artists.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from './material/material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ArtistListContainerComponent } from './artist-list-container/artist-list-container.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistService } from './artist.service';
import { ArtistViewComponent } from './artist-view/artist-view.component';
import { ArtViewComponent } from './art-view/art-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistsComponent,
    AboutComponent,
    NavBarComponent,
    Alphabets,
    ArtistListContainerComponent,
    ArtistViewComponent,
    ArtViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
