import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesSuperioresComponent } from './enlaces-superiores.component';

describe('EnlacesSuperioresComponent', () => {
  let component: EnlacesSuperioresComponent;
  let fixture: ComponentFixture<EnlacesSuperioresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnlacesSuperioresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlacesSuperioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
