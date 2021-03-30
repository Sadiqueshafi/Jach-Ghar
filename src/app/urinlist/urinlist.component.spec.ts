import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrinlistComponent } from './urinlist.component';

describe('UrinlistComponent', () => {
  let component: UrinlistComponent;
  let fixture: ComponentFixture<UrinlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrinlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrinlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
