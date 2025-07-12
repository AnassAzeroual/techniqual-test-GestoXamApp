/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewExamComponent } from './new-exam.component';

describe('NewExamComponent', () => {
  let component: NewExamComponent;
  let fixture: ComponentFixture<NewExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
