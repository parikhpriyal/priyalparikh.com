import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eai } from './eai';

describe('Eai', () => {
  let component: Eai;
  let fixture: ComponentFixture<Eai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eai],
    }).compileComponents();

    fixture = TestBed.createComponent(Eai);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
