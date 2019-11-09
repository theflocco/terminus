import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminAddComponent } from './termin-add.component';

describe('TerminAddComponent', () => {
  let component: TerminAddComponent;
  let fixture: ComponentFixture<TerminAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
