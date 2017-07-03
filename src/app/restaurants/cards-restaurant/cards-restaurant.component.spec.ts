import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsRestaurantComponent } from './cards-restaurant.component';

describe('CardsRestaurantComponent', () => {
  let component: CardsRestaurantComponent;
  let fixture: ComponentFixture<CardsRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
