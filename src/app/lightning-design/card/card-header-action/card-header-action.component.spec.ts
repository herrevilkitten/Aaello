import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderActionComponent } from './card-header-action.component';

describe('CardHeaderActionComponent', () => {
  let component: CardHeaderActionComponent;
  let fixture: ComponentFixture<CardHeaderActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHeaderActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeaderActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
