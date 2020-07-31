import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtViewComponent } from './art-view.component';

describe('ArtViewComponent', () => {
  let component: ArtViewComponent;
  let fixture: ComponentFixture<ArtViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
