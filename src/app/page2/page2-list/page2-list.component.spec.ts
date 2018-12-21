import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2ListComponent } from './page2-list.component';

describe('Page2ListComponent', () => {
  let component: Page2ListComponent;
  let fixture: ComponentFixture<Page2ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
