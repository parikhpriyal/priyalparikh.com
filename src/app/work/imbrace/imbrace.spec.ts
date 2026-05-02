import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imbrace } from './imbrace';

describe('Imbrace', () => {
  let component: Imbrace;
  let fixture: ComponentFixture<Imbrace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imbrace],
    }).compileComponents();

    fixture = TestBed.createComponent(Imbrace);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
