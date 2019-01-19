import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackoverflowGalleryComponent } from './stackoverflow-gallery.component';

describe('StackoverflowGalleryComponent', () => {
  let component: StackoverflowGalleryComponent;
  let fixture: ComponentFixture<StackoverflowGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackoverflowGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackoverflowGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
