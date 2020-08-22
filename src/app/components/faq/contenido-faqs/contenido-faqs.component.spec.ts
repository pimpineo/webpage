import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoFaqsComponent } from './contenido-faqs.component';

describe('ContenidoFaqsComponent', () => {
  let component: ContenidoFaqsComponent;
  let fixture: ComponentFixture<ContenidoFaqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoFaqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
