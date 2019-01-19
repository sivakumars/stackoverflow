import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinspiredComponent } from './getinspired.component';

describe('GetinspiredComponent', () => {
  let component: GetinspiredComponent;
  let fixture: ComponentFixture<GetinspiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetinspiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinspiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
