import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorChoseComponent } from './color-chose.component';

describe('ColorChoseComponent', () => {
  let component: ColorChoseComponent;
  let fixture: ComponentFixture<ColorChoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorChoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorChoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
