import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminShareViewComponent } from './termin-share-view.component';

describe('TerminShareViewComponent', () => {
  let component: TerminShareViewComponent;
  let fixture: ComponentFixture<TerminShareViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminShareViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminShareViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
