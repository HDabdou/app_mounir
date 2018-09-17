import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestStockComponent } from './gest-stock.component';

describe('GestStockComponent', () => {
  let component: GestStockComponent;
  let fixture: ComponentFixture<GestStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
