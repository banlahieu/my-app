import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1ListComponent } from './page1-list.component';

describe('Page1ListComponent', () => {
  let component: Page1ListComponent;
  let fixture: ComponentFixture<Page1ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
