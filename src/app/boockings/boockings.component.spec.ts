import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoockingsComponent } from './boockings.component';

describe('BoockingsComponent', () => {
  let component: BoockingsComponent;
  let fixture: ComponentFixture<BoockingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoockingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoockingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
