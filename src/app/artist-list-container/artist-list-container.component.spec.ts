import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistListContainerComponent } from './artist-list-container.component';

describe('ArtistListContainerComponent', () => {
  let component: ArtistListContainerComponent;
  let fixture: ComponentFixture<ArtistListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
