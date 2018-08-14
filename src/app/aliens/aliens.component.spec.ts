import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliensComponent } from './aliens.component';

describe('AliensComponent', () => {
  let component: AliensComponent;
  let fixture: ComponentFixture<AliensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
