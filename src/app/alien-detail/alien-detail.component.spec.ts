import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienDetailComponent } from './alien-detail.component';

describe('AlienDetailComponent', () => {
  let component: AlienDetailComponent;
  let fixture: ComponentFixture<AlienDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlienDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
