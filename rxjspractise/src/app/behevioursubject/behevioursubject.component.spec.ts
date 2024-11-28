import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehevioursubjectComponent } from './behevioursubject.component';

describe('BehevioursubjectComponent', () => {
  let component: BehevioursubjectComponent;
  let fixture: ComponentFixture<BehevioursubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehevioursubjectComponent]
    });
    fixture = TestBed.createComponent(BehevioursubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
