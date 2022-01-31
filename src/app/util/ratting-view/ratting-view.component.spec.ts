import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RattingViewComponent } from './ratting-view.component';

describe('RattingViewComponent', () => {
  let component: RattingViewComponent;
  let fixture: ComponentFixture<RattingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RattingViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RattingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
