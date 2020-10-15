import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoPromocionComponent } from './producto-promocion.component';

describe('ProductoPromocionComponent', () => {
  let component: ProductoPromocionComponent;
  let fixture: ComponentFixture<ProductoPromocionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoPromocionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
