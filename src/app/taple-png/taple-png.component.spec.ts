import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaplePNGComponent } from './taple-png.component';

describe('TaplePNGComponent', () => {
  let component: TaplePNGComponent;
  let fixture: ComponentFixture<TaplePNGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaplePNGComponent]
    });
    fixture = TestBed.createComponent(TaplePNGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
