/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BananaSnackComponent } from './banana-snack.component';

describe('BananaSnackComponent', () => {
  let component: BananaSnackComponent;
  let fixture: ComponentFixture<BananaSnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BananaSnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BananaSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
